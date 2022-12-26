const tl = gsap.timeline({defaults:{ease:"power1.out"}})

tl.to('.text', {y:"0%", duration:1,stagger:0.25})
tl.to('.slider', {y:"-100%", duration:1.5, delay:0.75})
tl.to('.intro ', {y:"-100%", duration:1}, "-=1")
tl.from(".home #bg", {scale: 1.2, ease: 'power4.in',duration:0.6},'=-0.5')
tl.fromTo('nav', {opacity:0}, {opacity:1, duration:1})
tl.fromTo('.home-text', {opacity:0}, {opacity:1, duration:1},"=-1")
// tl.set(document.getElementById("bg"), {position:"fixed"});