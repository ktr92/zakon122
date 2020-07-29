$(document).ready(function() {



	$('.search__button').click(function(e) {
		e.preventDefault();
		$('.search__full').toggleClass('search__full_open');
		$('.search__button').toggleClass('search__button_open');
	});


});



$(function() {
    $('.menumobile').click(function(event) {
        $(this).toggleClass('active');
        $('.mainmenu').slideToggle();
    });
    $('.closemenu').click(function(event) {
        $('.menumobile').toggleClass('active');
        $('.mainmenu').slideToggle();
    });
});










$(document).ready(function() {
    new WOW().init();
    $("input[type=tel]").mask("+7 (999) 999-99-99");

    try {
        $('.slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            prevArrow: $('.slidernav__left'),
            nextArrow: $('.slidernav__right'),

        });

    } catch (err) {}

    lightbox.option({
        'resizeDuration': 20,
        'wrapAround': true
    });

});


$(window).scroll(function() {
    scroll = $(window).scrollTop();

    if (scroll >= 700) $('#header').addClass('fixed');
    else $('#header').removeClass('fixed');
});




$(document).ready(function() {
    var number = document.querySelector('#num_years'),
        numberTop = number.getBoundingClientRect().top,
        start = 0,
        end = 10;
    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop - window.innerHeight / 1.1) {
            this.removeEventListener('scroll', onScroll);
            var interval = setInterval(function() {
                number.innerHTML = ++start;
                if (start == end) {
                    clearInterval(interval);
                }
            }, 200);
        }
    });
    number1 = document.querySelector('#num_spec'), numberTop1 = number1.getBoundingClientRect().top, start1 = 0, end1 = 25;
    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop1 - window.innerHeight / 1.1) {
            this.removeEventListener('scroll', onScroll);
            interval1 = setInterval(function() {
                number1.innerHTML = ++start1;
                if (start1 == end1) {
                    clearInterval(interval1);
                }
            }, 80);
        }
    });
    number2 = document.querySelector('#num_sites'), numberTop2 = number2.getBoundingClientRect().top, start2 = 0, end2 = 50;
    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop2 - window.innerHeight / 1.1) {
            this.removeEventListener('scroll', onScroll);
            interval2 = setInterval(function() {
                number2.innerHTML = ++start2;
                if (start2 == end2) {
                    clearInterval(interval2);
                }
            }, 40);
        }
    });

    number3 = document.querySelector('#num_tasks'), numberTop3 = number3.getBoundingClientRect().top, start3 = 0, end3 = 100;
    window.addEventListener('scroll', function onScroll() {
        if (window.pageYOffset > numberTop3 - window.innerHeight / 1.1) {
            this.removeEventListener('scroll', onScroll);
            interval3 = setInterval(function() {
                number3.innerHTML = ++start3;
                if (start3 == end3) {
                    clearInterval(interval3);
                }
            }, 20);
        }
    });


});



if ($(window).width() <= 767) {
    try {
        $('.team__items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplay: false,
            autoplaySpeed: 3000,
            arrows: true,
            dots: false,
            prevArrow: $('.team__left'),
            nextArrow: $('.team__right'),
            responsive: [{
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },

                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });

    } catch (err) {}
};






$(document).ready(function() {



    var btn = $('.up');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    jQuery("a.scrollto").click(function() {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top - 90;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
});


$(document).ready(function() {
    $('.close-modal').on('click', close_modal);
    $('#modal_close_href').on('click', close_modal);

    function close_modal() {
        $('.dom-popup').css("display", "none");
    }
});