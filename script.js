
function codePen(){
  gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
el: document.querySelector("#main"),
smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
scrollTop(value) {
  return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
},
getBoundingClientRect() {
  return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
},
pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
codePen()
function timeLine(){
  var tl = gsap.timeline()
  var a = 0;
  setInterval(function(){
      a = a + Math.floor(Math.random()*20)
      if(a<100){
          document.querySelector("#loader h1").
          innerHTML = a + " %"
      }else{
          a = 100
          document.querySelector("#loader h1").
          innerHTML = a + "%"
      }
  },150)

  tl.to("#loader h1",{
    delay:0.5,
    duration:1,
    scale:1.5,  
  })
  
  tl.to("#loader",{
    top:"-100%",
    delay:.4
  })

tl.from("#page1",{
    scale:1.2,
    opacity:0
})
tl.from("#page1 #nav h1",{
  y:-30,
  opacity:0
},"a")
tl.from("#page1 #nav #part2 span",{
  y:-30,
  opacity:0,
},"a")
tl.from("#page1 #nav #part2 h3",{
  y:-30,
  opacity:0,
  stagger:.1
},"a")
tl.from("#page1 #nav #part2 #cart i",{
  scale:0,
  opacity:0,
},"a")


tl.from("#page1 #text #div-1 h1",{
  y:100,
  opacity:0,
},"a")
tl.from("#page1 #text #div-2 h1",{
  opacity:0,
  y:100,
},"a")
tl.from("#page1 #text p",{
  y:50,
  opacity:0,
  scale:0,
  opacity:1,
},"a")
tl.from("#page1 img",{
  opacity:0,
  scale:0,
},"a")

}
timeLine()
Shery.mouseFollower()

Shery.makeMagnet("#page1 #nav h1, #cart i ", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.textAnimate("#div-1 h1, #div-2 h1", {
  style: 1,
  opacity:0,
  y: -10,
  duration: 8,

});
