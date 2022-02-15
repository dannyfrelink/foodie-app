import { fetchWithBarcode } from './script.js';

const startScanButton = document.querySelector('#start_scan');
const closeButton = document.querySelector('#close_button');
const videoDiv = document.querySelector('#video')

startScanButton.addEventListener('click', startDetecting);

async function startDetecting() {
    startScanButton.style.display = "none";
    closeButton.style.display = 'inline-block';

    const barcodeDetector = new BarcodeDetector();
    let itemsFound = [];
    const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
    });

    let barcodeValue;

    const video = document.createElement('video');
    video.srcObject = mediaStream;
    video.autoplay = true;

    videoDiv.append(video)

    const render = () => {
        barcodeDetector
            .detect(video)
            .then((barcodes) => {
                barcodes.forEach((barcode) => {
                    if (!itemsFound.includes(barcode.rawValue)) {
                        itemsFound.push(barcode.rawValue);
                        barcodeValue = barcode.rawValue;
                        fetchWithBarcode(barcodeValue);

                        barcodeDetector.release();
                        startScanButton.style.display = "flex";
                        closeButton.style.display = 'none';
                    }
                });
            })
            .catch(console.error);
    }

    const renderLoop = () => {
        requestAnimationFrame(renderLoop);
        render();
    }
    renderLoop();
}

export { startScanButton, closeButton, videoDiv }