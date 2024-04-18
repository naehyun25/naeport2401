gsap.registerPlugin(ScrollTrigger);

gsap.to(".profile-img-bg", {
    scrollTrigger: {
        trigger: ".nae-main-section",
        start: "40px top",
        end: "bottom bottom",
        scrub: true,
        markers: true
    },
    width: "100%",  // Animate width to 100%
    height: "100%",  // Animate height to 100%
    // clipPath: "none",  // Remove clipping at the end
    ease: "none",
    left: 0,
    scale: 1.5, 
});
