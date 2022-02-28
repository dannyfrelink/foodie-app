const articleProduct = document.querySelector('article');

export default function insertProduct(data) {
    const productInfo = data.product
    articleProduct.innerHTML = `
        <h2>${productInfo.abbreviated_product_name}</h2>
        <img src="${productInfo.image_url}" alt="Product image">
        <p>test</p>
    `;
    console.log(data);
}