import { showProductSection } from "./hidden.js";
import { fetchWithBarcode } from "./script.js";

const barcodeInput = document.querySelector('input[type="text"]');
barcodeInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
})


const submitBarcode = document.querySelector('input[type="button"]');

submitBarcode.addEventListener('click', () => {
    fetchWithBarcode(barcodeInput.value);
    showProductSection();
});

export default barcodeInput;