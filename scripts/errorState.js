// import { submitBarcode } from "./searchBarcode.js";
import startDetecting from "./startScan.js";
// import { video } from "./variables.js";
import { clearHash } from "./router.js";
import { closePopup, errorPopup, invalidBarcode } from "./variables.js";

export default function errorState(data) {
    errorPopup.classList.remove('hidden');

    console.log(data)

    // submitBarcode.addEventListener('click', () => {
    //     if (data.code === null || data.status_verbose === 'product not found') {
    //         invalidBarcode.classList.remove('hidden');
    //         console.log('test')
    //     }
    // });
}

closePopup.addEventListener('click', () => {
    clearHash()
    errorPopup.classList.add('hidden');
    startDetecting();
});