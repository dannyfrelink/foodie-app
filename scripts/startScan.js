import { barcodeSection, loader, video, videoDiv } from './variables.js';
import { showBarcodeSection } from './hidden.js';

export default async function startDetecting() {
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

    loader.classList.add('hidden');
    barcodeSection.classList.add('infaden');

    // Tracks ipv video
    // Wat als mensen hun camera geen toestemming geven
    // Loader in aparte module


    const render = () => {
        barcodeDetector
            .detect(video)
            .then((barcodes) => {
                barcodes.forEach((barcode) => {
                    if (!itemsFound.includes(barcode.rawValue)) {
                        itemsFound.push(barcode.rawValue);
                        barcodeValue = barcode.rawValue;
                        window.location.hash = barcodeValue;
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

