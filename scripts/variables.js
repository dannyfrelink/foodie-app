const body = document.querySelector('body');

// Landing part
const startScanButton = document.querySelectorAll('.scan_button');
const header = document.querySelector('header');

// Scanner part
const barcodeSection = document.querySelector('section');
const videoDiv = document.querySelector('#video');
const loader = document.querySelector('#loader');

// Article part
const articleProduct = document.querySelector('article');
const h2 = document.querySelector('article h2');
const img = document.querySelector('article>img');
const p = document.querySelector('article p');
const ul = document.querySelector('article ul');

export { body, startScanButton, header, barcodeSection, videoDiv, loader, articleProduct, h2, img, p, ul }