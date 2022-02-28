import { body, h2, img, p, ul } from './variables.js'

export default function insertProduct(data) {
    const productInfo = data.product;
    const ingredients = productInfo.ingredients_text_en;
    const ingredientsArray = ingredients.split(',');

    h2.innerHTML = productInfo.abbreviated_product_name;
    img.src = productInfo.image_url;
    p.innerHTML = 'test';
    ingredientsArray.forEach(ingredient => {
        let listItem = document.createElement('li');
        if (ingredient !== '') {
            listItem.innerHTML = ingredient;
            ul.appendChild(listItem);
        }
    })

    // console.log(listItem)



    console.log(productInfo.ingredients_text_en);
}