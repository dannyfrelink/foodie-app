import { header, main, videoDiv } from "./start.js"

const stopDetecting = () => {
    header.classList.remove('hidden');
    main.classList.remove('infaden');
    videoDiv.innerHTML = '';
}

document.querySelector('#close_button').addEventListener('click', stopDetecting);