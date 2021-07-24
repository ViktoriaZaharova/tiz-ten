$(document).ready(function () {
    $('.btn-arrow-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('click').siblings('.footer-box__body').slideToggle();
    });

    $('.menu-main__list li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        if (location === link) {
            $(this).addClass('current');
        }
    });
});

$('.btn-burger-mobile').on('click', function (e) {
   e.preventDefault();
   $(this).toggleClass('clicked');
   $('.mobile-menu').fadeToggle();
});

$('.dropdown-item').on('click', function (e) {
    e.preventDefault();
    $(this).find('.dropdown-menu').css('left', '0');
});

$('.prev-menu').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.dropdown-menu').css('left', '-100%');
});