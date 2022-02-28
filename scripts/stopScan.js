import { header, main, videoDiv, loader } from "./startScan.js"

const stopDetecting = () => {
    header.classList.remove('hidden');
    main.classList.remove('infaden');
    videoDiv.innerHTML = '';
    loader.classList.add('hidden');
}

document.querySelector('#close_button').addEventListener('click', stopDetecting);