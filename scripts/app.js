import handleRoutes from "./router.js";
import addEventListeners from "./ui.js";
import { header } from "./variables.js";

handleRoutes();
addEventListeners();

if (window.location.hash) {
    header.classList.add('hidden');
}