const historyTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".history-title-wrap",
        start: "bottom 100%",
        end: "bottom 85%",
        scrub: 2,
        markers: true
    }
});

historyTimeline.from(".first-title-text", {
    y: '100%',
    opacity: 0,
    ease: "power2.out"
}).from(".second-title-text", {
    y: '100%',
    opacity: 0,
    ease: "power2.out"
}, "-=0.25");


// history-content 가로스크롤
const sections = document.querySelectorAll('.scroll-section');

gsap.to('.history-content-wrap', {
    xPercent: -100 * (sections.length - 1),
    ease: 'none',
    scrollTrigger: {
        trigger: '.history-content-wrap',
        // markers: true,
        pin: true,
        scrub: 1,
        start : "top 300px",
        end: `+=${window.innerWidth * (sections.length - 1)}`
    }
});