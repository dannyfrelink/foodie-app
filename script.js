let barcode = 3168930158158

const fetchData = () => {
    fetch(`https://world.openfoodfacts.org/api/v0/product/` + barcode + `.json`)
        .then(res => res.json())
        .then(data => console.log(data))
}

// create new detector
var barcodeDetector = new BarcodeDetector({ formats: ['code_39', 'codabar', 'ean_13'] });

// console.log(barcodeDetector)

// check compatibility
if (barcodeDetector) {
    console.log('Barcode Detector supported!');
} else {
    console.log('Barcode Detector is not supported by this browser.');
}

// check supported types
BarcodeDetector.getSupportedFormats()
    .then(supportedFormats => {
        supportedFormats.forEach(format => console.log(format));
    });

var img = document.createElement('img');
img.src = 'barcode.png';

barcodeDetector.detect(img)
    .then(barcodes => {
        barcodes.forEach(barcode => console.log(barcode.rawData));
    })
    .catch(err => {
        console.log(err);
    })