import { fetchWithBarcode } from './script.js';
import { startScanButton, video, videoDiv } from './variables.js';
import { showBarcodeSection } from './hidden.js'

startScanButton.forEach(button => {
    button.addEventListener('click', startDetecting);
});

async function startDetecting() {
    showBarcodeSection();

    const barcodeDetector = new BarcodeDetector();
    let itemsFound = [];
    const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: 'environment'
        }
    });

    let barcodeValue;

    video.srcObject = mediaStream;
    await video.play();


    videoDiv.append(video);

    const render = () => {
        barcodeDetector
            .detect(video)
            .then((barcodes) => {
                barcodes.forEach((barcode) => {
                    if (!itemsFound.includes(barcode.rawValue)) {
                        itemsFound.push(barcode.rawValue);
                        barcodeValue = barcode.rawValue;
                        fetchWithBarcode(barcodeValue);
                        video.pause();
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

