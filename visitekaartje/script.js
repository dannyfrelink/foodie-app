gsap.timeline()
    .fromTo('#racket', {
        rotation: -45
    }, {
        rotation: 45,
        delay: 0.3
    })
    .to('#racket', {
        opacity: 0
    })

gsap.from('#business_card', {
    scale: 0.3,
    x: '-19vw',
    y: '7vw',
    transformOrigin: '0% 0%',
    duration: 1.5,
    delay: 0.5
})

const businessCard = document.querySelector('main')

gsap.set('.beam', {
    rotation: 180,
    transformOrigin: '50% 50%',
})

businessCard.addEventListener('mouseenter', () => {
    gsap.from('.beam', {
        height: 0,
        stagger: 0.2
    })

    gsap.from('.text_beam', {
        opacity: 0,
        stagger: 0.2,
        delay: 0.3
    })
})