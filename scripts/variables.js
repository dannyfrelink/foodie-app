const body = document.querySelector('body');

// Landing part
const startScanButton = document.querySelectorAll('.scan_button');
const header = document.querySelector('header');

// Scanner part
const barcodeSection = document.querySelector('main>section');
const videoDiv = document.querySelector('#video');
const loader = document.querySelector('#loader');

// Article part
const articleProduct = document.querySelector('article');
const nameProduct = document.querySelector('article h2');
const imgProduct = document.querySelector('article>img');
const quantityProduct = document.querySelector('article p');
const ulIngredients = document.querySelector('article section:first-of-type ul');
const ulAllergies = document.querySelector('article section:nth-of-type(2) ul');

export { body, startScanButton, header, barcodeSection, videoDiv, loader, articleProduct, nameProduct, imgProduct, quantityProduct, ulIngredients, ulAllergies }