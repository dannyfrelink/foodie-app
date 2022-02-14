let barcode = 3168930158158

fetch(`https://world.openfoodfacts.org/api/v0/product/` + barcode + `.json`)
    .then(res => res.json())
    .then(data => console.log(data))
