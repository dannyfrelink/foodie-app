import { body, header, barcodeSection, videoDiv, loader, articleProduct } from './variables.js';

const showBarcodeSection = () => {
    body.classList.remove('overflow_visible')
    header.classList.add('hidden');
    barcodeSection.classList.add('infaden');
    loader.classList.remove('hidden');
    articleProduct.classList.add('hidden');
}

const showProductSection = () => {
    body.classList.add('overflow_visible')
    videoDiv.innerHTML = '';
    barcodeSection.classList.remove('infaden');
    loader.classList.add('hidden');
    articleProduct.classList.remove('hidden');
}

export { showBarcodeSection, showProductSection }