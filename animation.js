// avoid dragging img & texts
$('img,h4,h1,h6,h3').on('dragstart', function(event) { event.preventDefault(); });
//animation
const web_init = gsap.timeline({default:{ease:'powe4.inOut'}})

web_init.from('.anim_1',{y:35,opacity:0,stagger:0.2});


