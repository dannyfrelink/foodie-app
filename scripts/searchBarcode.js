import { showProductSection } from "./hidden.js";
import { fetchWithBarcode } from "./script.js";
import { invalidBarcode } from "./variables.js";

const barcodeInput = document.querySelector('input[type="text"]');
barcodeInput.addEventListener('keydown', (e) => {
    invalidBarcode.classList.add('hidden');
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})

const submitBarcode = document.querySelector('input[type="button"]');

submitBarcode.addEventListener('click', () => {
    if (fetchWithBarcode(barcodeInput.value) !== undefined) {
        fetchWithBarcode(barcodeInput.value);
        showProductSection();
    }
    else {
        invalidBarcode.classList.remove('hidden');
    }
});

export default barcodeInput;