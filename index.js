
var rule = CSSRulePlugin.getRule("span::after");

//Using Timeline

var tl = gsap.timeline({
    defaults: {
        duration: 1 //since all our classes have duration = 1 as their default speed we can add it in 'defaults' property of GSAP
    }
});

tl.from('.anim1', {
    opacity: 0,
    stagger: 0.6,
    y: -50
});

tl.to(rule, {
    duration: 1.5,
    cssRule:
    {
        scaleY: 0
    }
},"-=2.0");

tl.from('aside',{
    backgroundPosition: "200px, 0px",
    opacity: 0
}, "-=1.5")

tl.from('img',{
    y: 50,
    opacity: 0
}, "-=.4")

document.getElementById('cta').addEventListener('click', ()=>{
    tl.reversed() ? tl.play() : tl.reverse();

    //Meaning of above ternary operation
     /*if(tl.reversed() == true){
         tl.play();
     }else{
         tl.reverse();
     }*/
})


//Normal And Static way of GSAP animation
/* 
gsap.from('.anim1',{
    opacity: 0,
    duration: 1,
    // ease: 'power3.easeInOut',
    y: -50,
    stagger: 0.5
});

gsap.to(rule,{
    duration: 2,
    cssRule: {
        scaleY: 0
    },
    
});

gsap.from('img',{
    duration: 1,
    y: 30,
    opacity: 0,
    delay: 1.7
});

gsap.from('aside',{
    duration: 1,
    backgroundPosition: '200px, 0px',
    opacity: 0,
    delay: 1.2
}); 
*/