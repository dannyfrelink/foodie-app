import { header, section, videoDiv } from "./start.js"

const stopDetecting = () => {
    header.style.display = "flex";
    section.style.display = "none";
    videoDiv.innerHTML = '';
}

document.querySelector('#close_button').addEventListener('click', stopDetecting);