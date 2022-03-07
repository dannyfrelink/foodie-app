import { fetchWithBarcode } from './fetch.js';
import { startLoader } from './loader.js';
import { header } from './variables.js';
import './vendor/routie.min.js';

export default function handleRoutes() {
    routie({
        ':code': (code) => {
            fetchWithRoute(code);
        }
    })
}

const fetchWithRoute = (hash) => {
    header.classList.add('hidden');
    startLoader();
    fetchWithBarcode(hash);
}

export const clearHash = () => {
    window.location.hash = '';
}