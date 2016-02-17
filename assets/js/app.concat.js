/* globals $:false */
var width = $(window).width(),
    height = $(window).height();
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

function init() {
    $(window).load(function() {
        $(".loader").fadeOut("fast");
    });
    $(window).resize(function(event) {});
    $(document).ready(function($) {
        $(".homeslider.royalSlider").royalSlider({
            //autoScaleSlider: true,
            imageScalePadding: 60,
            transitionSpeed: 1000,
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
                delay: 5000,
            }
        });
        $(".projectslider.royalSlider").royalSlider({
            //autoScaleSlider: true,
            imageScalePadding: 60,
            transitionSpeed: 500,
            controlNavigation: 'thumbnails',
            usePreloader: false,
            loop: true,
            thumbs: {
                spacing: 10,
                arrowsAutoHide: true
            },
            fullscreen: {
                enabled: true,
                nativeFS: false
            }
        });
    });
}
init();