import insertProduct from './insertProduct.js'

export default function checkBarcode(data) {
    if (data.status_verbose === 'product found') {
        insertProduct(data)
    }
    else {
        errorState()
    }
}