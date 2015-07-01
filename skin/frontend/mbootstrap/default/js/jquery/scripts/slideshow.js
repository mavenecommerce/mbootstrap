jQuery(document).ready(function ($) {

    var sliderOptions = {
        tablet: {
            query: 'screen and (min-width: 768px)'
        }
    };

    var $slideshow = $('.slideshow-container .slideshow');
    var cycleOptions = {
        slides: '> li',
        pager: '.slideshow-pager',
        pagerTemplate: '<span class="pager-box"></span>',
        speed: 600,
        pauseOnHover: true,
        swipe: true,
        prev: '.slideshow-prev',
        next: '.slideshow-next',
        fx: 'scrollHorz',
        log: false,
        'auto-height': 'calc'
    };

    // Programm
    // ----------

    // Matchmedia func
    var matchmedia = mm = function(query, callback, usePolyfill) {
        var host = {};
        var isMatchMediaSupported = !!(window && window.matchMedia) && !usePolyfill;
        if(isMatchMediaSupported) {
            var res = window.matchMedia(query);
            callback.apply(host, [res.matches, res.media]);
            res.addListener(function(changed) {
                callback.apply(host, [changed.matches, changed.media]);
            });
        } else {
            console.log("Sorry but your browser do not support 'matchmedia' feature. Check it on http://caniuse.com/#feat=matchmedia");
        }
    };

    // Init SlideShow
    function initSliderShow(){

        // check if slider content is present and if slider wasn't init before
        if( $slideshow.length && $slideshow.data('cycle.opts') == undefined ) {
            $slideshow.cycle(cycleOptions);
        }
    };

    // Set matchmedia rules
    mm(sliderOptions.tablet.query, function(match) {
        // match = true or false

        if(match) {
            initSliderShow();
        } else {
            // nothing
        }
    });
});
