// import { submitBarcode } from "./searchBarcode.js";
import { video } from "./variables.js";
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
    errorPopup.classList.add('hidden');
    video.play();
})