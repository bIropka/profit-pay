$(window).ready(function() {

    $(window).scroll(function() {

        if($(window).width() < 481) {

            if($(window).scrollTop() > 0) {
                $('.header-info').slideUp();
            } else {
                $('.header-info').slideDown();
            }

        }



    });

    if($(window).width() < 1201) {
        $('.local').appendTo('.mobile-nav');
        $('.sign').appendTo('.mobile-nav');
        $('nav').appendTo('.mobile-nav');
    } else {
        $('.local').insertBefore('.logo-header');
        $('.sign').appendTo('.header-bottom');
        $('nav').prependTo('.header-bottom');
    }

    $(window).resize(function() {

        if($(window).width() < 1201) {
            $('.local').appendTo('.mobile-nav');
            $('.sign').appendTo('.mobile-nav');
            $('nav').appendTo('.mobile-nav');
        } else {
            $('.local').insertBefore('.logo-header');
            $('.sign').appendTo('.header-bottom');
            $('nav').prependTo('.header-bottom');
        }

    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-nav').toggleClass('active');
    });

    $('.custom-tab-controls .tab-control').click(function() {

        if(!$(this).hasClass('active')) {
            $(this).parents('.custom-tab').find('.item').slideUp();
            $(this).parents('.custom-tab').find('.item').eq($(this).index()).slideDown();
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        }

    });

});