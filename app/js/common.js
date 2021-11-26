$(document).ready(function () {
    $('.panel_heading:first-child').addClass('in').find('.block_hover').fadeIn();

    $('.panel_heading > .block_title').on('click', function () {
        $(this).parent().toggleClass('in').find('.block_hover').slideToggle();
        $(this).parent().siblings('.panel_heading').not(this).removeClass('in').find('.block_hover').slideUp();
    });

});

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

$('.tabs__caption-mobile').on('click', function () {
    $('.tabs__content').removeClass('active');
   $(this).siblings('.tabs__content').slideDown();
});


// событие клика за пределами блока
$(document).mouseup(function (e){ // событие клика по веб-документу
    var div = $(".breadcrumb.open"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.removeClass('open'); // скрываем его
    }
});

// скрыть меню каталога по клику за его пределами
$(document).mouseup(function (e) { // событие клика по веб-документу
    var div = $(".menu-container"); // тут указываем ID элемента
    var btn = $('.btn-catalog');
    if (!div.is(e.target) // если клик был не по нашему блоку
        && !btn.is(e.target) && btn.has(e.target).length === 0
        && div.has(e.target).length === 0) { // и не по его дочерним элементам
        div.fadeOut(); // скрываем его
        $('.overlay-menu').fadeOut();
        btn.removeClass('open-menu');
    }
});

$(document).ready(function() {
    $('.js-example-basic-single').select2({
        placeholder: '',
        allowClear: true,
        width: '100%',
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

$('.models-box .list-models').each(function () {
    if ($(this).find('li').length > 4) {
        $(this).find('li').slice(4).hide();
        $(this).parent('.models-box').append('<a href="#" class="list-models-toggle color-accent">показать все</a>');
    }

});

$('.list-models-toggle').on('click', function (e) {
    e.preventDefault();
    $('.list-models li:hidden').slideDown();
    $(this).hide();
});


$('.list-characteristics').each(function () {
    if ($(this).find('li').length > 4) {
        $(this).find('li').slice(4).hide();
        $(this).parent('.characteristics-wrap').append('<a href="#" class="btn-load-characteristics color-accent">Все характеристики</a>')
    }
});


$('.btn-load-characteristics').on('click', function(e){
    e.preventDefault();

    var
        $this = $(this),
        content = $(this).parent().find('.list-characteristics li');


    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');
        $this.html('Свернуть');

        content.css('display', 'flex');
    } else {
        $this.removeClass('trigger');
        $this.html('Все характеристики');

        content.slice(4).slideUp();
    }
});

