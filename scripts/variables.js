const body = document.querySelector('body');

// Landing part
const startScanButton = document.querySelectorAll('.scan_button');
const header = document.querySelector('header');

// Scanner part
const barcodeSection = document.querySelector('main>section');
const videoDiv = document.querySelector('#video');
const loader = document.querySelector('#loader');

// Article part
const articleProduct = document.querySelector('#product_info');
const nameProduct = document.querySelector('#product_info h2');
const imgProduct = document.querySelector('#product_info>img');
const quantityProduct = document.querySelector('#product_info p');
const ulIngredients = document.querySelector('#product_info section:first-of-type ul');
const ulAllergies = document.querySelector('#product_info section:nth-of-type(2) ul');

export { body, startScanButton, header, barcodeSection, videoDiv, loader, articleProduct, nameProduct, imgProduct, quantityProduct, ulIngredients, ulAllergies }