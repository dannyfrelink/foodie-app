import { fetchWithBarcode } from './script.js';
import { startScanButton, header, barcodeSection, videoDiv, loader, articleProduct } from './variables.js'

startScanButton.forEach(button => {
    button.addEventListener('click', startDetecting);
});

async function startDetecting() {
    header.classList.add('hidden');
    barcodeSection.classList.add('infaden');
    loader.classList.remove('hidden');
    articleProduct.classList.add('hidden');

    const barcodeDetector = new BarcodeDetector();
    let itemsFound = [];
    const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
    });

    let barcodeValue;

    const video = document.createElement('video');
    video.srcObject = mediaStream;
    video.autoplay = true;

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

                        videoDiv.innerHTML = '';
                        barcodeSection.classList.remove('infaden');
                        loader.classList.add('hidden');
                        articleProduct.classList.remove('hidden');
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

export { header, barcodeSection, videoDiv, loader, articleProduct }