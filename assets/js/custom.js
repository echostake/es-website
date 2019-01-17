$(document).ready(function () {
    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
        e.preventDefault();
        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 75
        }, 900);
        window.location.hash = target;
    });

    var $elements = $('.animate');
    var $window = $(window);
    var animationDelay  = (window.innerWidth<991) ? -20 : 80;


    animation()
    $window.on('scroll', function (e) {
        animation()
    });

    function animation() {
        $elements.each(function (i, elem) { //loop through each element
            if ($(this).hasClass('animate--done')) // check if already animated
                return;
            animateMe($(this));
        });
    }

    function animateMe(elem) {
        var winTop = $(window).scrollTop() - animationDelay; // calculate distance from top of window
        var winBottom = winTop + $(window).height() - animationDelay;
        var elemTop = $(elem).offset().top; // element distance from top of page
        var elemBottom = elemTop + $(elem).height();

        if ((winTop <= elemTop && winBottom >= elemTop) || (winTop <= elemBottom && winBottom >= elemBottom)) {
            $(elem).addClass('animate--done');
        }
    }
});