import {init, start, isMobile, events, isAndroid, isIOS} from '@spotsize/js-sdk';

//Init spotsize with your organizationId
init('YOUR_ORGANIZATION_ID');

console.log('Mobile:', isMobile());
console.log('Android:', isAndroid());
console.log('iOS:', isIOS());

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const result = document.getElementById('result');
const qr = document.getElementById('qr');
const qrPreloader = document.getElementById('qrPreloader');
const error = document.getElementById('error');

button1.onclick = async () => {
    measure('YOUR_PRODUCT_ID');
}

button2.onclick = async () => {
    measure(['YOUR_PRODUCT_ID1', 'YOUR_PRODUCT_ID2']);
}

events.onQRShown = () => {
    showElement(qrPreloader, false);
}


const measure = async (productId) => {
    error.innerText = '';
    result.innerHTML = '';
    showElement(qr, true);
    showElement(qrPreloader, true);

    try {
        // Pass 'true' to 'useMockData' to directly receive mocked data and bypass the actual scan flow
        const recommendation = await start(productId, qr, true);

        let str = '';
        const models = recommendation.models;
        for (let n in models) {
            const model = models[n];
            str += `<strong>${model.modelId}</strong><br>`;
            for (let p in model.labels) {
                const label = model.labels[p];
                str += `${label.labelCategory} ${label.labelNumber}<br>`;
            }
            str += '<br>';
        }
        showElement(qr, false);
        result.innerHTML = str;

    } catch (error) {
        showElement(qr, false);
        console.log('Error', error);
        error.innerText = error;
    }
};

const showElement = (element, show) => {
    element.style.display = show ? 'block' : 'none';
}


showElement(qr, false);
