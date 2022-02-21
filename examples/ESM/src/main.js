import {init, start, isMobile, events, isAndroid, isIOS} from '@spotsize/js-sdk';

//Init spotsize with your organizationId
init('YOUR_ORGANIZATION_ID');

console.log('Mobile:', isMobile());
console.log('Android:', isAndroid());
console.log('iOS:', isIOS());

const button1 = document.getElementById('button1');
const result = document.getElementById('result');
const qr = document.getElementById('qr');
const qrPreloader = document.getElementById('qrPreloader');
const error = document.getElementById('error');

button1.onclick = async () => {
    measure('YOUR_PRODUCT_ID');
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
        //                                                        ↓
        const response = await start(productId, qr, false);

        if (response.status == 'SUCCESS') {
            const sizeInfo = response.getSize();
            const label = sizeInfo.label;
            const value = sizeInfo.value;

            result.innerHTML = label;
        } else {
            result.innerHTML = 'No matching size found.';
        }

        showElement(qr, false);

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
