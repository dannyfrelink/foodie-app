import { body, header, barcodeSection, videoDiv, loader, articleProduct, errorPopup } from './variables.js';

const showBarcodeSection = () => {
    body.classList.remove('overflow_visible');
    header.classList.add('hidden');
    loader.classList.remove('hidden');
    articleProduct.classList.add('hidden');
}

const showProductSection = () => {
    body.classList.add('overflow_visible');
    videoDiv.innerHTML = '';
    barcodeSection.classList.remove('infaden');
    articleProduct.classList.remove('hidden');
    errorPopup.classList.add('hidden');
}

export { showBarcodeSection, showProductSection }