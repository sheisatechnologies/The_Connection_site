jQuery(document).ready(function($) {
    var icon = $(".mobile-menu-icon");
    var menu = $(".mobile-slider");
    var tl = new TimelineLite({
        paused: true,
        reversed: true
    });
    tl.fromTo(
        ".mobile-slider",
        0.3, {
            x: 200,
            autoAlpha: 0
        }, {
            x: 0,
            autoAlpha: 1,
            ease: Power4.easeOut
        }
    );
    tl.to(
        ".filter",
        0.3, {
            autoAlpha: 1
        },
        0
    );
    icon.click(function() {
        tl.play();
    });
    $(".close-menu").click(function() {
        tl.reverse();
    });
    $(".filter").click(function() {
        tl.reverse();
    });
});


$('#main-slider9').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    center: true,
    margin: 0,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>' 
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            dots: true
        }
        
    }
    
});

$('#main-slider99').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    center: true,
    margin: 0,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>' 
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            dots: true
        }
        
    }
    
});

$('#main-slider999').owlCarousel({
    loop: true,
    dots: false,
    autoplay: true,
    center: true,
    margin: 0,
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    responsiveClass: true,
    nav: true,
    navText: [
        '<i class="fa-solid fa-arrow-left-long"></i>', 
        '<i class="fa-solid fa-arrow-right-long"></i>' 
    ],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        600: {
            items: 1,
            nav: false
        },
        1000: {
            items: 1,
            nav: false,
            dots: true
        }
        
    }
    
});
