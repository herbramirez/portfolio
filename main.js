const container = document.querySelector(".gallery-content");
const items = document.querySelector(".projectLink");
const videoPlayer = document.querySelector(".videoPlayer");
const tl = new TimelineMax();

tl.fromTo(container, .75, { width: "0%"}, {width:"100%", ease: "power1.out"});

tl.fromTo(".projectLink", 
     /*Start  */   { y: 50, opacity: 0, stagger: 0.1,},
     /*Endt  */ { y:0, duration: 1, opacity: 1, stagger: 0.1}
  
  );



//gsap.fromTo(".overlay", {x: 1000},{x:50, duration: 1.5})

//gsap.fromTo(".gallery-content", {width: "0vw", },{width:"90vw", duration: .75})
//gsap.fromTo(".gallery-row", {opacity: 0 },{opacity: 1, duration: 1.75})
//gsap.fromTo(".projectLink", {opacity: 0 },{opacity: 1, duration: 2.75})
//gsap.fromTo(".videoPlayer", {opacity: 0},{opacity: 1, duration: 1.75})


