let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", dets => {
    cursor.style.left = dets.x - 8 + "px";
    cursor.style.top = dets.y - 8 + "px";
    cursorBlur.style.left = dets.x - 150 + "px";
    cursorBlur.style.top = dets.y - 150 + "px";
});

let h4All = document.querySelectorAll("#nav h4");
h4All.forEach(h4 => {
    h4.addEventListener("mouseenter", () => {
        cursor.style.scale = 4;
        cursor.style.border = '1px solid white';
        cursor.style.backgroundColor = 'transparent';
        h4.style.color = '#000';
    });
    h4.addEventListener("mouseout", () => {
        cursor.style.scale = 1;
        cursor.style.border = '0px solid white';
        cursor.style.backgroundColor = '#95C11E';
        h4.style.color = '#fff';
    });
});


gsap.to("#nav", {
    backgroundColor: "#000",
    height: "108px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -20%",
        scrub: 1,
    },
});

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top 0%",
        end: "top -80%",
        scrub: 2,
    }
});

gsap.from("#about-us img, #about-us-in", {
    y:50,
    opacity: 0,
    duration: 1,
    // stagger: 0.4, (this property brings the elements one-by-one)
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
});

gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 70%",
        end: "top 65%",
        scrub: 1,
    }
});

gsap.from("#colon1", {
    y:-70,
    x:-70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        // markers: true,
        start: 'top 60%',
        end: 'top 45%',
        scrub: 2,
    }
})
gsap.from("#colon2", {
    y:70,
    x:70,
    scrollTrigger: {
        trigger: '#colon1',
        scroller: 'body',
        // markers: true,
        start: 'top 60%',
        end: 'top 45%',
        scrub: 2,
    }
})