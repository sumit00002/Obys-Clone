function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function loadinganimation(){
    let tl = gsap.timeline()

tl.from(".line h1, #load,.line h2, #small h5 ", {
    y: 200,
    opacity: 0,
    duration: 1.5,
    ease: "power4.out",
    stagger: 0.3,
    delay: 0.2,
    scale: 1,
    onStart: function () {
        var loadh6 = document.querySelector("#load h6")
        var grow = 0
        setInterval(function () {
            if (grow < 100) {
                loadh6.innerHTML = grow++
            }
            else (
                loadh6.innerHTML = grow
            )
        }, 35);
        let loadingText = document.getElementById("loading-text");
        let loadingTexts = ["now", "now"];
        let textIndex = 0;
        let fonts = ["Silk serif"]; // Define font styles
        let blendModes = ["screen", "screen"];
        setInterval(() =>{
            loadingText.innerHTML = loadingTexts[textIndex];
            loadingText.style.fontFamily = fonts[textIndex]; // Change font family
            loadingText.style.mixBlendMode = blendModes[textIndex];
            textIndex = (textIndex + 1) % loadingTexts.length;
        },1100)
        
    }
})

tl.to("#loader", {
    duration: 0.5,
    delay: 1.1,
    opacity: 0,
    onComplete: () => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.opacity = 1; // Ensure main content is visible
    }
})
tl.from("#page1",{
    y:1000,
    opacity:0,
    delay:0.2,
    ease: Power4,

})
tl.from("#nav",{
    opacity:0,

})
tl.from(".heading h1",{
    y: 100,
    opacity:0,
    stagger: 0.2,
    scale: 1,
    ease: "power4",
    duration: 1
})

}
function cursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y,
            overwrite: 'auto',
            ease: "power4.out"
        })
    })
    Shery.makeMagnet("#nav-part-2 h4", {});
    var videocontainer = document.querySelector("#video-content")
    var vid = document.querySelector("#video-content video")
        videocontainer.addEventListener("mouseenter",function(){
        videocontainer.addEventListener("mousemove",function(dets){
            gsap.to("#crsr",{
                opacity:0,
            })
            gsap.to("#video-cursor",{
                left: dets.x - 570,
                y: dets.y - 100,
                duration: 0.5,

            })
        })
        videocontainer.addEventListener("mouseleave",function(){
            gsap.to("#crsr",{
                opacity:1,
            })
            gsap.to("#video-cursor",{
                top: "-15%",
                left: "70%",
            })
        })
    })


    var flag = 0
    videocontainer.addEventListener("click",function(){
        if(flag == 0){
            vid.addEventListener("click",function(){
                vid.play()
                vid.style.opacity = 1
                document.querySelector("#video-cursor").innerHTML = `<i class="ri-pause-line"></i>`
                gsap.to("#video-cursor",{
                    scale: 0.5,
                })
                flag = 1
            })
        }else{
            vid.addEventListener("click",function(){
                vid.play()
                vid.style.opacity = 0
                document.querySelector("#video-cursor").innerHTML = `<i class="ri-play-line"></i>`
                gsap.to("#video-cursor",{
                    scale: 1,
                })
                flag = 0
            })
        }
    })
}
function SheryAnimation(){
    Shery.imageEffect(".img-div", {
        style: 2,
        config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-10},"mousemove":{"value":3},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":38399},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272749932567818},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.45,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.47,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.4,"range":[0,2]},"noise_scale":{"value":9.92,"range":[0,100]}},
        // debug: true,
        gooey: true,
      });
}


locomotiveAnimation();
loadinganimation();
cursor();
SheryAnimation();


document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        x:dets.x,
        y:dets.y,

    })
})
document.querySelector("#he").addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1,
    })
})
document.querySelector("#he").addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0,
    })
})