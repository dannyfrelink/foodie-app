import insertProduct from './insertProduct.js';
import { errorPopup, invalidBarcode, submitBarcode } from './variables.js';
import errorMessage from './errorState.js';

function init(data) {
    const test = data.status;
    console.log(test);
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
        init(data);
    }
}

export const checkBarcode = {
    init,
    check
}