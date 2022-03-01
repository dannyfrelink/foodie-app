import insertProduct from './insertProduct.js';
import errorState from './errorState.js';

export default function checkBarcode(data) {
    console.log(data.code)
    console.log(data.status_verbose)
    if (data.status_verbose === 'product found') {
        insertProduct(data);
    }
    else {
        errorState(data);
    }
}