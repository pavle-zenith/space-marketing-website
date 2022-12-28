const tl = gsap.timeline({defaults:{ease:"power1.out"}})

tl.to('.text', {y:"0%", duration:1,stagger:0.25})
tl.to('.slider', {y:"-100%", duration:1.5, delay:0.75})
tl.to('.intro ', {y:"-100%", duration:1}, "-=1")
tl.from(".home #bg", {scale: 1.2, ease: 'power4.in',duration:0.6},'=-0.5')
tl.fromTo('nav', {opacity:0}, {opacity:1, duration:1})
tl.fromTo('.home-text', {opacity:0}, {opacity:1, duration:1},"=-1")
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
//       (function(){
//       var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
//       s1.async=true;
//       s1.src='https://embed.tawk.to/63a9c3d047425128790a2558/1gl7i9qar';
//       s1.charset='UTF-8';
//       s1.setAttribute('crossorigin','*');
//       s0.parentNode.insertBefore(s1,s0);
//       })();
// tl.set(document.getElementById("bg"), {position:"fixed"});
function toggleNav() {
    document.getElementById("mobileNav").classList.toggle("moveNav");
  }
