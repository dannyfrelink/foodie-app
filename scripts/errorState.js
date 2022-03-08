import startDetecting from "./startScan.js";
import { clearHash } from "./router.js";
import { errorPopup, invalidBarcode } from "./variables.js";

export default function errorMessage() {
    invalidBarcode.classList.remove('hidden');
}

export const closePopupFunction = () => {
    clearHash()
    errorPopup.classList.add('hidden');
    startDetecting();
}