fetch('https://world.openfoodfacts.org/api/v0/product/737628064502.json')
    .then(res => res.json())
    .then(data => console.log(data))
