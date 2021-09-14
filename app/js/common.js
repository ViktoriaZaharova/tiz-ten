// accordeon
function accordeon() {
    var panel = $('.panel_heading');

    if (panel.hasClass('in')) {
        $('.in').find('.block_hover').slideDown();
    }

    $('.panel_heading .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
    });
}

accordeon();


$('.gallery-product-max').slick({
    slidesToShow: 1,
    fade: true,
    arrows: false,
    dots: false,
    asNavFor: '.gallery-product-preview',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                dots: true,
            }
        }
    ]
});

$('.gallery-product-preview').slick({
    slidesToShow: 3,
    arrows: false,
    dots: false,
    asNavFor: '.gallery-product-max',
    focusOnSelect: true,
    vertical: true,
    responsive: [
        {
            breakpoint: 860,
            settings: {
                vertical: false,
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 5,
                vertical: false,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                vertical: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                vertical: false,
            }
        }
    ]
});

// tabs
$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$('.breadcrumbs-button').on('click', function () {
   $('.breadcrumb').toggleClass('open');
});



// событие клика за пределами блока
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".breadcrumb.open"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('open'); // скрываем его
    }
});

// select
$(document).ready(function() {
    $('.js-example-basic-single').select2({
        placeholder: '',
        allowClear: true,
        width: '100%'
    });
});

// load header+footer all pages
$(function () {
    var includes = $('[data-include]');
    jQuery.each(includes, function () {
        var file = 'views/' + $(this).data('include') + '.html';
        $(this).load(file);
    });
});