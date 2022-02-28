import { header, barcodeSection, videoDiv, loader, articleProduct } from './variables.js';

const showBarcodeSection = () => {
    header.classList.add('hidden');
    barcodeSection.classList.add('infaden');
    loader.classList.remove('hidden');
    articleProduct.classList.add('hidden');
}

const showProductSection = () => {
    videoDiv.innerHTML = '';
    barcodeSection.classList.remove('infaden');
    loader.classList.add('hidden');
    articleProduct.classList.remove('hidden');
}

export { showBarcodeSection, showProductSection }