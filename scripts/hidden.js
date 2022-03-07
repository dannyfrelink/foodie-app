import { startLoader } from './loader.js';
import { body, header, barcodeSection, videoDiv, articleProduct, errorPopup } from './variables.js';

const showBarcodeSection = () => {
    body.classList.remove('overflow_visible');
    header.classList.add('hidden');
    startLoader();
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