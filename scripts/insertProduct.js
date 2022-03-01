import { nameProduct, imgProduct, quantityProduct, ulIngredients, ulAllergies } from './variables.js';
import { showProductSection } from './hidden.js';
import { barcodeInput } from './searchBarcode.js';

export default function insertProduct(data) {
    showProductSection();
    barcodeInput.value = '';

    const productInfo = data.product;
    const ingredients = productInfo.ingredients_text_en;
    const ingredientsArray = ingredients.split(',');
    const allergies = productInfo.allergens_imported;
    const allergiesArray = allergies.split(',');

    nameProduct.innerHTML = productInfo.product_name;
    imgProduct.src = productInfo.image_url;
    quantityProduct.innerHTML = `Quantity: ${productInfo.quantity}`;

    ulIngredients.innerHTML = '';
    ingredientsArray.forEach(ingredient => {
        let listItemIngredient = document.createElement('li');
        if (ingredient !== '') {
            listItemIngredient.innerHTML = ingredient;
            ulIngredients.appendChild(listItemIngredient);
        }
    })

    ulAllergies.innerHTML = '';
    allergiesArray.forEach(allergy => {
        let listItemAllergy = document.createElement('li');
        if (allergy !== '') {
            listItemAllergy.innerHTML = allergy;
            ulAllergies.appendChild(listItemAllergy);
        }
    })
}