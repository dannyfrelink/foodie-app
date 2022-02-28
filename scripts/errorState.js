import { closePopup, errorPopup } from "./variables.js";

export default function errorState() {
    errorPopup.classList.remove('hidden');
}

closePopup.addEventListener('click', () => {
    errorPopup.classList.add('hidden');
})