gsap.timeline()
    .fromTo('#racket', {
        rotation: -45
    }, {
        rotation: 45,
        // duration: 1,
        delay: 0.3
    })
    .to('#racket', {
        opacity: 0
    })

gsap.from('#visitekaartje', {
    scale: 0.3,
    x: '-19vw',
    y: '7vw',
    transformOrigin: '0% 0%',
    duration: 1.5,
    delay: 0.45
})

