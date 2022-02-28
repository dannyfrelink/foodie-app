export default function insertProduct(data) {
    const productInfo = data.product;

    const h2 = document.querySelector('article h2');
    const img = document.querySelector('article>img');
    const p = document.querySelector('article p');

    h2.innerHTML = productInfo.abbreviated_product_name;
    img.src = productInfo.image_url;
    p.innerHTML = 'test';

    console.log(data);
}