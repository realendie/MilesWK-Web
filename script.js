// IDs and whatnot
const arrow = document.getElementById('arrowdown')
// So Glitch will bring up editor errors because it thinks these are not defined...
// ...this is a nice loophole. ¯\_(ツ)_/¯


// Register GSAP plugins.

gsap.registerPlugin(ScrollToPlugin)
gsap.registerPlugin(ScrollTrigger, TextPlugin);


// This is to init Locomotive Scroll (smooth scrolling) along side of the ScrollTrigger plugin.
// I don't get any of it. Okay, I get SOME of it. I just got it from GSAP.
const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".smooth-scroll"),
  smooth: true, 
    multiplier: 0.6,

});
locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".smooth-scroll", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: false}) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: ".smooth-scroll" });


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\


// GSAP Scroll timeline 1

const tl = gsap.timeline({
  scrollTrigger: {
    scrub: 3,
    pin: true,
    trigger: "#start",
    endTrigger: "#endtrigger",
    start: "20% 20%",
    end: "+=300"
  }
});

// GSAP Scroll timeline 2
const tl2 = gsap.timeline({
  scrollTrigger: {
    scrub: 3,
    pin: true,
    trigger: ".pausebeforecontinuing",
    endTrigger: "#endtrigger",
    start: "20% 20%",
    end: "+=300"
  }
});

const tl3 = gsap.timeline({
  scrollTrigger: {
    scrub: 3,
    pin: true,
    trigger: ".projects",
    endTrigger: "#footer",
    start: "20% 20%",
    end: "+=300"
  }
});



// Box scroll animation
tl.from(".aboutme", {
  y: -100,
  scale: 0.3,
  rotate: 30,
  opacity: 0,
  x: -100, color: 'black',
  duration: 4, 
  stagger: 0.2
});


// Programming scack items scroll animation.
tl.from(".stackitem", {
  y: -100,
  scale: -1,
  opacity: 0,
  duration: 10,
  stagger: 0.4
});

tl.from(".aboutme_text_div", {
  y: -100,
  scale: -1,
  opacity: 0,
  duration: 10,
  stagger: 0.4
});

// A pause before going on with the rest of the website.
tl.from(".pausebeforecontinuing", {
  duration: 6,
  stagger: 0.4
});





// NON-SCROLL ANIMATIONS

gsap.from('.animate-in-navbar', {
  y: -100,
  duration: 1,
  stagger: 0.1,
  ease: 'bounce'
});

// Animation 2: Typing Effect
gsap.to('.mileswk', {
  duration: 2,
  delay: 2.2,
  text: "MilesWK",
  ease: "bounce"
});

gsap.from('.comefromtop', {
  y: -100,
  opacity: 0,
  duration: 1,
  stagger: 0.4
});

gsap.from('.comefromleft', {
  x: -2000,
  ease: 'power3',
  duration: 2,
  delay: 1,
  stagger: 0.4
});

tl3.from('.project', {x: -2000, stagger: 0.4, duration: 2, })



console.log("This has a TON of JS! Check it out! It works so well!")
