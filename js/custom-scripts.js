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
        $('.sign-logined').appendTo('.mobile-nav');
        $('nav').appendTo('.mobile-nav');
    } else {
        $('.local').insertBefore('.logo-header');
        $('.sign').appendTo('.header-bottom');
        $('.sign-logined').appendTo('.header-bottom');
        $('nav').prependTo('.header-bottom');
    }

    $(window).resize(function() {

        if($(window).width() < 1201) {
            $('.local').appendTo('.mobile-nav');
            $('.sign').appendTo('.mobile-nav');
            $('.sign-logined').appendTo('.mobile-nav');
            $('nav').appendTo('.mobile-nav');
        } else {
            $('.local').insertBefore('.logo-header');
            $('.sign').appendTo('.header-bottom');
            $('.sign-logined').appendTo('.header-bottom');
            $('nav').prependTo('.header-bottom');
        }

    });

    $('.burger').click(function() {
        $(this).toggleClass('active');
        $('.mobile-nav').toggleClass('active');
    });

    $('.account-burger').click(function() {
        $(this).toggleClass('active');
        $('.account-nav').toggleClass('active');
    });

    $('.custom-tab-controls .tab-control').click(function() {

        if(!$(this).hasClass('active')) {
            $(this).parents('.custom-tab').find('.item').slideUp();
            $(this).parents('.custom-tab').find('.item').eq($(this).index()).slideDown();
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        }

    });

    $('.custom-select .current-value').click(function() {

        $(this).parents('.custom-select').toggleClass('active');

    });

    $('.custom-select ul li').click(function() {

        var currentValue = $(this).text();
        $(this).text($(this).parents('.custom-select').find('.current-value').text());
        $(this).parents('.custom-select').find('.current-value').text(currentValue);
        $(this).parents('.custom-select').find('input[type="text"]').attr('value', currentValue);
        $(this).parents('.custom-select').removeClass('active');

    });

    $(document).click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('.custom-select')).length) {
            $('.custom-select').removeClass('active');
        }
    });

    $('.faq-item-header').click(function() {

        $(this).parent().siblings('.faq-item').find('.faq-item-header').removeClass('active');
        $(this).parent().siblings('.faq-item').find('.faq-item-data').slideUp(200);
        $(this).toggleClass('active');
        $(this).siblings('.faq-item-data').slideToggle(200);

    });

    $('.close-window .fa').click(function() {
        $('.window').fadeOut();
    });

    $('.sign-up').click(function() {
        $('.window-reg-1').fadeIn();
    });

    $('.window-reg-1 button').click(function() {
        $('.window-reg-1').fadeOut();
        $('.window-reg-2').fadeIn();
    });

    $('.sign-in').click(function() {
        $('.window-login').fadeIn();
    });

    $('.show-code').click(function() {
        $('.window-code').fadeIn();
    });

    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length && !$target.closest($('.window-inner')).length) {
            $('.window').fadeOut();
        }
        if ($target.hasClass('close-window') || $target.hasClass('fa-close')){
            $('.window').fadeOut();
        }
    });

});