// import { showProductSection } from "./hidden.js";
import { fetchWithBarcode } from "./fetch.js";
import { barcodeInput, invalidBarcode, submitBarcode } from "./variables.js";

// barcodeInput.addEventListener('keydown', disableEnter)

export const disableEnter = (e) => {
    invalidBarcode.classList.add('hidden');
    if (e.key === 'Enter') {
        e.preventDefault();
    }
}

export const fetchSearchvalue = () => {
    fetchWithBarcode(barcodeInput.value);





    // if (fetchWithBarcode(barcodeInput.value) !== undefined) {
    //     fetchWithBarcode(barcodeInput.value);
    //     showProductSection();
    // }
    // else {
    //     invalidBarcode.classList.remove('hidden');
    // }

    // console.log(fetchWithBarcode(barcodeInput.value))
}

// submitBarcode.addEventListener('click', fetchSearchvalue);

export { barcodeInput, submitBarcode };