import { videoDiv, loader } from "./variables.js";

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            loader.classList.add('hidden');
        }
    })
});

appearOnScroll.observe(videoDiv);

