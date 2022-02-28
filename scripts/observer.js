import { videoDiv, loader } from "./start.js";

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log(entry.target)
            loader.classList.add('hidden');
        }
    })
});

appearOnScroll.observe(videoDiv);

