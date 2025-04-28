var crsr = document.querySelector("#cursor")
var crbr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+20 +"px"
    crsr.style.top = dets.y+"px"  
})

document.addEventListener("mousemove",function(dets){
    crbr.style.left = dets.x - 250 +"px"
    crbr.style.top = dets.y - 250 +"px"
   
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
   })
    
   elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95c11E"
    crsr.style.backgroundColor = "#95C11E"
   })
})

gsap.to("#nav",{
    backgroundColor :"#000",
    height : "110px",
    duration: 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -15%",
        end : "top  -10%",
        scrub:1,
    }

})


gsap.to("#main",{
    backgroundColor : "#000",
    // duration : 10,
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -41%",
        end : "top  -70%",
        scrub:3,

    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:2,

    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub : 4,
    }
})

gsap.from("#colon2",{
    y:80,
    x:80,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 45%",
        scrub : 4,
    }
})

var h2all = document.querySelectorAll(".footer h2")
h2all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 2.5
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
   })
    
   elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #95c11E"
    crsr.style.backgroundColor = "#95C11E"
   })
})

// gsap.from(".f-img",{
//     y:10,
//     x:10,
//     scrollTrigger:{
//         trigger:".f-img",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 40%",
//         scrub : 4,
//     }
// })