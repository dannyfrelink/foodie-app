import checkBarcode from './checkBarcode.js'

export function fetchWithBarcode(barcodeValue) {
    let barcode = barcodeValue;
    fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
        .then((response) => response.json())
        .then((data) => {
            checkBarcode(data);
        })
        .catch((err) => {
            console.error(err);
        });
}