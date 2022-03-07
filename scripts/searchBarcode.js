import { barcodeInput, invalidBarcode, submitBarcode } from "./variables.js";

export const disableEnter = (e) => {
    invalidBarcode.classList.add('hidden');
    if (e.key === 'Enter') {
        e.preventDefault();
    }
}

export const fetchSearchvalue = () => {
    window.location.hash = barcodeInput.value;
    barcodeInput.value = '';





    // if (fetchWithBarcode(barcodeInput.value) !== undefined) {
    //     fetchWithBarcode(barcodeInput.value);
    //     showProductSection();
    // }
    // else {
    //     invalidBarcode.classList.remove('hidden');
    // }

    // console.log(fetchWithBarcode(barcodeInput.value))
}

export { barcodeInput, submitBarcode };