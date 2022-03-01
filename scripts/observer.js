import { loader } from "./variables.js";

export const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loader.classList.add('hidden');
        }
    })
});