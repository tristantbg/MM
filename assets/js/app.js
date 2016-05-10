/* globals $:false */
var width = $(window).width(),
    height = $(window).height(),
    pslide, hslide,
    isMobile = false;
$(function() {
    var app = {
        init: function() {}
    };
    app.init();
});

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function arrayRand(myArray) {
    var rand = myArray[Math.floor(Math.random() * myArray.length)];
    return rand;
}

function newpage() {
    window.location = newLocation;
}

function sizeSet() {
    width = $(window).width();
    height = $(window).height();
    if (width <= 1100) {
        isMobile = true;
    } else {
        isMobile = false;
    }
}

function init() {
    $(window).load(function() {
        jQuery.rsCSS3Easing.codemm = 'cubic-bezier(0.305, 0.000, 0.210, 1.000)';
        $(".homeslider.royalSlider").royalSlider({
            //autoScaleSlider: true,
            easeInOut: 'codemm',
            imageScalePadding: 60,
            transitionSpeed: 1800,
            controlNavigation: 'none',
            arrowsNav: false,
            usePreloader: false,
            loop: true,
            controlsInside: false,
            navigateByClick: false,
            sliderDrag: false,
            sliderTouch: false,
            autoPlay: {
                enabled: true,
                pauseOnHover: false,
                delay: 4000,
            }
        });
        hslide = $(".homeslider.royalSlider").data('royalSlider');
        $(".projectslider.royalSlider").royalSlider({
            //autoScaleSlider: true,
            //imageScalePadding: 60,
            //autoScaleSlider: true,
            transitionSpeed: 500,
            controlNavigation: 'thumbnails',
            usePreloader: false,
            loop: true,
            thumbs: {
                spacing: 20,
                arrowsAutoHide: true
            }
        });
        pslide = $(".projectslider.royalSlider").data('royalSlider');
        if (pslide) {
            pslide.ev.on('rsAfterContentSet', function() {
                pslide.updateThumbsSize();
            });
        }
        $('.rsNav').before($('.fullscreen.open'));
        $(".loader").fadeOut("fast");
        $("#container").css('opacity', '1');
        var $opening = $('.opening');
        $opening.click(function(event) {
            $(this).fadeOut(500);
        });
        setTimeout(function() {
            $opening.fadeOut(500);
        }, 2000);
    });
    $(window).resize(function(event) {
        sizeSet();
    });
    $(document).ready(function($) {
        sizeSet();
        $('#mce-error-response, #mce-success-response').bind("DOMSubtreeModified", function() {
            $('form.validate .mc-field-group').hide();
        });
        $fsCloseBtn = $('.fullscreen.close');
        $('.fullscreen.open').click(function(event) {
            pslide.enterFullscreen();
            $fsCloseBtn.show();
        });
        $('.fullscreen.close').click(function(event) {
            pslide.exitFullscreen();
            $fsCloseBtn.hide();
        });
        $('.project .inner').click(function(event) {
            window.location = $(this).data('target');
        });
        $('.category .index-btn').click(function(event) {
            $('.category.wrap').toggleClass('list index');
        });
        //Link anim
        $('nav.mobile:not("li, a")').click(function(event) {
            $('nav.mobile').toggleClass('is-visible');
        });
        $('.link').click(function() {
            event.preventDefault();
            newLocation = this.href;
            if ($(this).is('.logo')) {
                if (isMobile) {
                    $('nav.mobile').toggleClass('is-visible');
                } else {
                    $('header').removeClass('reduced');
                    setTimeout(function() {
                        $('#container').fadeOut(300, newpage);
                    }, 600);
                }
            } else if ($(this).is('.home .link:not(".logo")')) {
                $('header').addClass('reduced');
                setTimeout(function() {
                    $('#container').fadeOut(300, newpage);
                }, 600);
            } else {
                newpage();
            }
        });
    });
}
init();