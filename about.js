var tl = gsap.timeline()
var tl_text = gsap.timeline()

function textbreak(){
    var name = document.querySelector(".name")
    var nameText = name.textContent
    var splittedText = nameText.split("")

    var clutter = ""
    splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

name.innerHTML = clutter
}
textbreak()

tl_text.from(".name span",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.08,
})


function textbreak2(){
    var name2 = document.querySelector(".name2")
    var name2Text = name2.textContent
    var splittedText = name2Text.split("")

    var clutter = ""
    splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

name2.innerHTML = clutter
}
textbreak2()

tl_text.from(".name2 span",{
    y:100,
    opacity:0,
    duration:0.3,
    delay:0,
    stagger:0.08,
})


function textbreak3(){
    var name3 = document.querySelector(".name3")
    var name3Text = name3.textContent
    var splittedText = name3Text.split("")

    var clutter = ""
    splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})

name3.innerHTML = clutter
}
textbreak3()

tl_text.from(".name3 span",{
    y:100,
    opacity:0,
    duration:0.2,
    delay:0,
    stagger:0.08,
})

// function desc(){
//     var description = document.querySelector(".description")
//     var descriptionText = description.textContent
//     var splittedText = descriptionText.split("")

//     var clutter = ""
//     splittedText.forEach(function(elem){
//     clutter += `<span>${elem}</span>`
// })

// description.innerHTML = clutter
// }
// desc()

// tl_text.from(".description span",{
//     y:100,
//     opacity:0,
//     duration:0.5,
//     delay:0,
//     stagger:0.08,
// })

tl_text.from(".description",{
    opacity:0,
    y:10,
    duration:0.4,
    delay:0,
    stagger:0.4,
})


tl_text.from(".role",{
    opacity:0,
    duration:1,

})
tl.from(".a",{
    y:70,
    duration:0.7,
    delay:1,
    stagger:0.1 
})
tl.from(".b",{
    y:70,
    duration:0.7,
    delay:0,
    stagger:0.1 
})
tl.from(".c",{
    y:70,
    duration:1,
    delay:0,
    stagger:0.1 
})