import insertProduct from './insertProduct.js';
import { errorPopup, invalidBarcode, submitBarcode } from './variables.js';
import errorMessage from './errorState.js';

async function init(data) {
    await check(data)
    const test = data.status;
    if (test === 0) {
        submitBarcode.addEventListener('click', errorMessage);
    }
}

function check(data) {
    if (data.status_verbose === 'product found') {
        invalidBarcode.classList.add('hidden');
        insertProduct(data);
    }
    else {
        errorPopup.classList.remove('hidden');
    }
}

export const checkBarcode = {
    init,
    check
}