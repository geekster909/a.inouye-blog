jQuery( document ).ready(function($) {
    console.log( "ready!" );

    function scrollToAnchor(aid){
        var aTag = $("a[name='"+ aid +"']");
        $('html,body').animate({scrollTop: aTag.offset().top},'slow');

    }
    $('.hp__hero--arrow').click(function(event) {
        scrollToAnchor('section2');
    });

    $('.hp__hero--slider').slick({
        slide: 'div',
        dots: false,
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplaySpeed: 5000,
        draggable: false
    });

    function moveToSelected(element) {
        if (element == "next") {
            var selected = $(".selected").next();
        } else if (element == "prev") {
            var selected = $(".selected").prev();
        } else {
            var selected = element;
        }

        var next = $(selected).next();
        var prev = $(selected).prev();
        var prevSecond = $(prev).prev();
        var nextSecond = $(next).next();

        $(selected).removeClass().addClass("selected");

        $(prev).removeClass().addClass("prev");
        $(next).removeClass().addClass("next");

        $(nextSecond).removeClass().addClass("nextRightSecond");
        $(prevSecond).removeClass().addClass("prevLeftSecond");

        $(nextSecond).nextAll().removeClass().addClass('hideRight');
        $(prevSecond).prevAll().removeClass().addClass('hideLeft');

    }

    $('#carousel div').click(function(e) {
        if (!$(this).hasClass('selected')) {
            e.preventDefault();
            moveToSelected($(this));
        }
    });

});
