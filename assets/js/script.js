$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false,
    });

    let typed = new Typed(".typed", {
        strings: ["Frontend Web Developer", "HTML5/CSS3/a little JS", "Student at Udemy and Geekbrains"],
        typeSpeed: 75,
        loop: true,
        startDelay: 1500,
        showCursor: false,
        backSpeed: 70,
        loopCount: false
    });
});