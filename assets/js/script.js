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

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });




        let skillsTopOffset = $(".skillsSection").offset().top;

        $(window).scroll(function() {

            console.log(window.pageYOffset);

            if(window.pageYOffset > skillsTopOffset - $(window).height() + 250) {

                $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#007bff',
                    scaleColor: false,
                    trackColor: 'rgba(150, 150, 150, 0.23)',
                    lineWidth: 5,
                    size: 155,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });

            }

        });
});