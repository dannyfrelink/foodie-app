import startDetecting from "./startScan.js";
import { clearHash } from "./router.js";
import { errorPopup, invalidBarcode } from "./variables.js";

export default function errorMessage(data) {
    const dataStatus = data.status;
    errorPopup.classList.remove('hidden');
    if (dataStatus === 0) {
        invalidBarcode.classList.remove('hidden');
    }
}

export const closePopupFunction = () => {
    clearHash()
    errorPopup.classList.add('hidden');
    startDetecting();
}