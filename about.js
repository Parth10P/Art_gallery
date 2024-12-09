function textbreak(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var splittedText = h1Text.split("")

    var clutter = ""
    splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

h1.innerHTML = clutter
}
textbreak()

gsap.from("h1 span",{
    y:100,
    opacity:0,
    duration:0.7,
    delay:0.5,
    stagger:-0.08,
})
var tl = gsap.timeline()

tl.from(".a",{
    y:70,
    duration:1,
    delay:1,
    stagger:0.1 
})
tl.from(".b",{
    y:70,
    duration:1,
    delay:0,
    stagger:0.1 
})
tl.from(".c",{
    y:70,
    duration:1,
    delay:0,
    stagger:0.1 
})