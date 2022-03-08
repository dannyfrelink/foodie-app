import startDetecting from "./startScan.js";
import { clearHash } from "./router.js";
import { closePopup, errorPopup, invalidBarcode } from "./variables.js";

export default function errorMessage() {
    invalidBarcode.classList.remove('hidden');
    console.log('test');
}

closePopup.addEventListener('click', () => {
    clearHash()
    errorPopup.classList.add('hidden');
    startDetecting();
});