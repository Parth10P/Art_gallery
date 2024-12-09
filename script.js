
var nav = gsap.timeline()

nav.from("h2", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
})

nav.from("h4", {
    y: -30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.4,
})
nav.from(".center", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    scale: 0.2,
})