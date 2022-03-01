import { header, barcodeSection, videoDiv, loader } from "./variables.js"

export default function stopDetecting() {
    header.classList.remove('hidden');
    barcodeSection.classList.remove('infaden');
    videoDiv.innerHTML = '';
    loader.classList.add('hidden');
}