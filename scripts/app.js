import { disableEnter, fetchSearchvalue } from "./searchBarcode.js";
import startDetecting from "./startScan.js";
import stopDetecting from "./stopScan.js";
import { startScanButton, closeButton, videoDiv, barcodeInput, submitBarcode } from "./variables.js";


startScanButton.forEach(button => {
    button.addEventListener('click', startDetecting);
});

closeButton.addEventListener('click', stopDetecting);

barcodeInput.addEventListener('keydown', disableEnter)
submitBarcode.addEventListener('click', fetchSearchvalue);