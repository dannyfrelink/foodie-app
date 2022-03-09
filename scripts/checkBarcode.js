import insertProduct from './insertProduct.js';
import { invalidBarcode } from './variables.js';
import errorMessage from './errorState.js';

function check(data) {
    if (data.status_verbose === 'product found') {
        invalidBarcode.classList.add('hidden');
        insertProduct(data);
    }
    else {
        errorMessage(data)
    }
}

export const checkBarcode = {
    check
}