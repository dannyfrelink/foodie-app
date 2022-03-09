import startDetecting from "./startScan.js";
import { clearHash } from "./router.js";
import { errorPopup, invalidBarcode } from "./variables.js";

let clicked = false;
export const checkIfClicked = () => {
    clicked = true;
}

export default function errorMessage(data) {
    const dataStatus = data.status;
    errorPopup.classList.remove('hidden');
    if (dataStatus === 0 && clicked) {
        invalidBarcode.classList.remove('hidden');
    }
}

export const closePopupFunction = () => {
    clearHash();
    errorPopup.classList.add('hidden');
    startDetecting();
}