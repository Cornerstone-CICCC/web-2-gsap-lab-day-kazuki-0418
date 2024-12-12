gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE

const tl = gsap.timeline();


tl.from('.section1 .content h1 span:nth-child(2)', {
    x: 1200,
    duration: 1,
}).from('.section1 .content h1 span:nth-child(1)', {
    x: -800,
    duration: 1,
    ease: 'power4.out'
}).from('.section1 .content p', {
    duration: 1,
    transformOrigin: "left top", // 左上起点
    rotation: 90,
    opacity: 0,
}).from('.section1 .content img', {
    y: 800,
    duration: 1,
    ease: 'power4.out'
});

const tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
        end: 'center center',
        scrub: 3,
    }
});

tl2.from('.section2 h2 span', {
    y: -600,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
}).from('.section2 p', {
    scale: 0.2,
    duration: 1,
    opacity: 0,
})


const tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section3',
        start: 'top center',
        end: 'center center',
        scrub: 3,
    }
});

tl3.from('.section3 h2', {
    x: -1200,
    duration: 1,
    scale: 10,
    ease: "power4.out",
}).set(".section3 p span", {
    backgroundColor: 'white',
    color: 'black',
}).from('.section3 p span', {
    y: 800,
    duration: 1,
    ease: "power4.out",
    stagger: 0.2,
})


const tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-sections",
        start: 'top top',
        end: '300% top',
        scrub: true,
        pin: true,
        markers: true,
    },
});


tl4.to(".horizontal-sections", {

    x: `-${document.querySelector(".horizontal-sections .section3").offsetWidth}`,
    duration: 1,
}).from(".horizontal-sections .section4 .portfolio-item", {
    x: 1200,
    duration: 0.5,
    opacity: 0.5,
    ease: "power4.out",
    stagger: 0.2,
})

const tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: '.section5',
        start: 'top -20vh',
        end: '200% 100vh',
        pin: true,
        scrub: true,
    }
});


const heading = document.querySelector('.section5 h2')
const headingText = heading.textContent;

const spannedText = headingText
    .split("")
    .map(char => char === " " ? "<span>&nbsp;</span>" : `<span>${char}</span>`)
    .join("");

heading.innerHTML = spannedText;

tl5.from('.section5 h2 span', {
    y: -600,
    duration: 1,
    opacity: 0,
    stagger: 1,
}).from('.section5 p', {
    y: 400,
    duration: 1,
    opacity: 0,
    delay: 1,
}).from(".contact-btn", {
    scale: 0,
    opacity: 0,
    delay: 1,
}).to(".section5", {
    backgroundColor: "black",
    color: "white",
    duration: 1,
    ease: "power4.out",
    delay: 1,
}).from(".section5", {
    backgroundPositionX: "190%",
})