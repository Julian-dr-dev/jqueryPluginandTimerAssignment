$(window).on('load', function() {
    $('.flexslider').flexslider({
        animation: "slide",      // You can choose "fade" or "slide"
        controlNav: true,        // Display navigation dots
        directionNav: true,      // Display next/prev arrows
        slideshowSpeed: 5000,    // Speed of slideshow
        animationSpeed: 600,     // Speed of transition
        smoothHeight: true       // Adjust height smoothly
    });
});