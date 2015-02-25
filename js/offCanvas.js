var offCanvas = {
    init: function () {

        offCanvas.appendOffCanvas();

        $offCanvas = $('.off-canvas');
        $overlay = $('.overlay');
        $offInner = $('.off-inner');
        $nav = $('.fixed-navbar');

        $('.open-off').on('click', function() {

            if ($offCanvas.hasClass('off-canvas-closed')) {
                offCanvas.openOffCanvas();

            } else {
                offCanvas.closeOffCanvas();

            }

        });

    },

    closeOffCanvas: function () {
        $offCanvas.removeClass('off-canvas-open');
        $offCanvas.addClass('off-canvas-closed');
        $overlay.fadeOut();
        $offCanvas.stop().animate({
            right: -250
        });
        $offInner.stop().animate({
            left: 0
        });
        $nav.stop().animate({
            left: 0
        });
    },

    openOffCanvas: function () {
        $offCanvas.removeClass('off-canvas-closed');
        $offCanvas.addClass('off-canvas-open');
        $overlay.fadeIn();
        $offCanvas.stop().animate({
            right: 0
        });
        $offInner.stop().animate({
            left: -250
        });
        $nav.stop().animate({
            left: -250
        });
    },

    appendOffCanvas: function() {
        if ($(window).width() < 991) {

            $('nav.nav').appendTo($('.off-canvas'));

        } else {

            $('nav.nav').appendTo($('.nav-outer'));
        }
    },

    resize: function () {

        offCanvas.closeOffCanvas();
        offCanvas.appendOffCanvas();


    }
};

$(document).ready(function() {
    offCanvas.init();
});

$(window).resize(function() {
    offCanvas.resize()
});