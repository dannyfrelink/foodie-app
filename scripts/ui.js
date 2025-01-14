import { checkIfClicked, closePopupFunction } from "./errorState.js";
import { disableEnter, fetchSearchvalue } from "./searchBarcode.js";
import startDetecting from "./startScan.js";
import stopDetecting, { stopScanner } from "./stopScan.js";
import { startScanButton, closeButton, barcodeInput, submitBarcode, closePopup } from "./variables.js";

export default function addEventListeners() {
    startScanButton.forEach(button => {
        button.addEventListener('click', startDetecting);
    });

    closeButton.addEventListener('click', stopScanner);
    closeButton.addEventListener('click', stopDetecting);

    barcodeInput.addEventListener('keydown', disableEnter);
    submitBarcode.addEventListener('click', fetchSearchvalue);
    submitBarcode.addEventListener('click', checkIfClicked);
    closePopup.addEventListener('click', closePopupFunction);
}
