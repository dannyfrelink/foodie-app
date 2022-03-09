import insertProduct from './insertProduct.js';
import { invalidBarcode } from './variables.js';
import errorMessage from './errorState.js';

export default function checkBarcode(data) {
    if (data.status_verbose === 'product found') {
        invalidBarcode.classList.add('hidden');
        insertProduct(data);
    }
    else {
        errorMessage(data);
    }
}