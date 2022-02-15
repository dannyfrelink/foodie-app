import { fetchWithBarcode } from './script.js';

window.onload = () => {
    detect();
};

async function detect() {
    const barcodeDetector = new BarcodeDetector();
    const barcodeScanner = document.getElementById('barcode_scanner');
    let itemsFound = [];
    const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment' },
    });

    let barcodeValue;

    const video = document.createElement('video');
    video.srcObject = mediaStream;
    video.autoplay = true;

    barcodeScanner.before(video);

    const render = () => {
        barcodeDetector
            .detect(video)
            .then((barcodes) => {
                barcodes.forEach((barcode) => {
                    if (!itemsFound.includes(barcode.rawValue)) {
                        itemsFound.push(barcode.rawValue);
                        barcodeValue = barcode.rawValue;
                        fetchWithBarcode(barcodeValue);
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