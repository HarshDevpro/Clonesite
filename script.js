const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});



function mousecursorfollower(){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform=`translate(${dets.x}px,${dets.y}px)`;
    })
}

// document.querySelectorAll(".element").forEach(function(element){
//     element.addEventListener("mousemove",function(details){
//         console.log(details)
//         gsap.to(element.querySelector("img"),{
//             opacity:1,
//             ease:Power1
            
//        })
//     }) 
// })


document.querySelectorAll(".element").forEach(function (element) {
    element.addEventListener("mousemove", function (details) {
    gsap.to(element.querySelector("img"), {
      opacity: 1,
      ease:Power1
    })
}) 
})

    
    
    
     
    
   

mousecursorfollower();

function firstpageani() {
 var tl = gsap.timeline();
tl.from(".nav",{
    y: '-10',
    opacity: 0,
    duration:1.5,
    ease: Expo.easeInOut
})
    .to(".bond",{
        y: 0,
        delay :-1,
        duration: 2,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from(".footer",{
        y: -10,
        opacity: 0,
        delay: -1,
        duration:1,
        ease: Expo.easeInOut,
        
    })
}
firstpageani()