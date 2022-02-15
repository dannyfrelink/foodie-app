import { startScanButton, closeButton, videoDiv } from "./start.js"

const stopDetecting = () => {
    startScanButton.style.display = "flex";
    closeButton.style.display = "none";
    videoDiv.innerHTML = ''

}

closeButton.addEventListener('click', stopDetecting);