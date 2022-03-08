import insertProduct from './insertProduct.js';
import { errorPopup, submitBarcode } from './variables.js';
import errorMessage from './errorState.js';

function init() {
    submitBarcode.addEventListener('click', errorMessage)
}

function check(data) {
    console.log(data.code)
    console.log(data.status_verbose)
    if (data.status_verbose === 'product found') {
        insertProduct(data);
    }
    else {
        errorPopup.classList.remove('hidden');
        checkBarcode.init();
    }
}

export const checkBarcode = {
    init,
    check
}