import { header, barcodeSection, video, videoDiv, loader } from "./variables.js";

export default function stopDetecting() {
    header.classList.remove('hidden');
    barcodeSection.classList.remove('infaden');
    videoDiv.innerHTML = '';
    loader.classList.add('hidden');
    stopScanner();
}

export const stopScanner = () => {
    const tracks = video.srcObject.getTracks();
    tracks.forEach(track => track.stop());
}