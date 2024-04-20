gsap.registerPlugin(ScrollTrigger);

gsap.to(".profile-img-bg", {
    scrollTrigger: {
        trigger: ".nae-main-section",
        start: "40px top",
        end: "bottom bottom",
        scrub: true,
        markers: true
    },
    width: "100%",  
    height: "100%",  

    ease: "none",
    left:0,
    scale: 1.5, 
});
gsap.to(".back-text", {
    scrollTrigger: {
        trigger: ".nae-main-section",
        start: "40px top",
        end: "bottom bottom",
        scrub: true,
        markers: true
    },
    x: '-200%',  
    y: '-200%', 
    scale: 2, 
    ease: "none"  
});
gsap.to(".front-text", {
    scrollTrigger: {
        trigger: ".nae-main-section",
        start: "40px top",
        end: "bottom bottom",
        scrub: true,
        markers: true
    },
    x: '200%',  
    y: '200%', 
    scale: 2,
    ease: "none" 

});
gsap.to(".profile-img-wrap", {
    scrollTrigger: {
        trigger: ".nae-main-section",
        start: "40px top",
        end: "bottom bottom",
        scrub: true,
        markers: true
    },
    x: '150%',  // 전체 뷰포트의 너비만큼 오른쪽으로 이동


});







