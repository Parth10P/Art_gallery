
var main = document.querySelector("body")
var cursor = document.querySelector("#cursor")
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        ease:"circ.out"
    })
})