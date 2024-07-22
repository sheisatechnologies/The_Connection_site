document.querySelector(".ri-close-large-fill").addEventListener("click", function () {
    document.querySelector(".menu-overlay").style.left = "100%";
})

document.querySelector("#nav-menu").addEventListener("click", function () {
    document.querySelector(".menu-overlay").style.left = "0%";
})


let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
    const parallax2 = document.getElementById("parallax2");


    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax2.style.backgroundPositionY = offset * 0.8 + "px";
    });

});

mm.add("(max-width: 799px)", () => {
    const parallax2 = document.getElementById("parallax2");

    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax2.style.backgroundPositionY = offset * 0.18 + "px";
    });


});



let mm2 = gsap.matchMedia();

mm2.add("(min-width: 800px)", () => {
    const parallax3 = document.getElementById("parallax3");


    window.addEventListener("scroll", function () {
        let offset = window.scrollY;
        parallax3.style.backgroundPositionY = offset * 0.5 + "px";
    });

});

// mm.add("(max-width: 799px)", () => {
//     // mobile setup code here...
//   });


/*
let mm3 = gsap.matchMedia();

mm3.add("(min-width: 800px)", () => {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sixth-section',
            start: '10% 50%',
            end: '100% 50%',
            scrub: true,
            markers: true,
        }
    });

    tl3.to(".bg-six", {
        backgroundPosition: "bottom",
    })
});

mm3.add("(max-width: 799px)", () => {
    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.sixth-section',
            start: '10% 50%',
            end: '100% 50%',
            scrub: true,
            // markers: true,
        }
    });

    tl3.to(".bg-six", {
        y: -100,
    })
});

*/

let mm4 = gsap.matchMedia();

mm4.add("(min-width: 800px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.fifth-section',
            start: '0% 80%',
            end: '100% 0%',
            scrub: true,
            // markers: true,
        }
    });
    tl.to(".overlay-five-png", {
        y: -100,
    })
});

mm4.add("(max-width: 799px)", () => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.fifth-section',
            start: '0% 50%',
            end: '100% 50%',
            scrub: true,
            // markers: true,
        }
    });
    // tl.to(".overlay-five-png",{
    //     y: -50,
    // })
});


const parallax = document.getElementById("parallax");

// Parallax Effect for DIV 1
window.addEventListener("scroll", function () {
    let offset = window.scrollY;
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
    // DIV 1 background will move slower than other elements on scroll.
});

