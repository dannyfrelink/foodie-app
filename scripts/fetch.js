import checkBarcode from './checkBarcode.js';
import { stopLoader } from './loader.js';

export async function fetchWithBarcode(barcodeValue) {
    let barcode = barcodeValue;
    await fetch(`https://world.openfoodfacts.org/api/v0/product/${barcode}.json`)
        .then((response) => response.json())
        .then((data) => {
            stopLoader();
            checkBarcode(data);
        })
        .catch((err) => {
            console.error(err);
        });
}