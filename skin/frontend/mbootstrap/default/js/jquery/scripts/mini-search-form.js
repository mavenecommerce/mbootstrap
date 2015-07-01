/**
 * Responsive Mini Search form
 * */
jQuery(document).ready(function ($) {

    var options = {
        tablet: {
            landscape: {
                query:      'screen and (min-width: 768px) and (max-width: 992px)',
                className:  'search-mini_tablet-landscape'
            },
            bufferId:           'search-mini_tablet-landscape-buffer',
            navbarId:           '#i-navbar',
            searchFormHoveDiv:  '.js-navbar-main-collapse'
        }
    };

    var $form = $("#search_mini_form");

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

    // Create buffer
    function createSearchBuffer(){
        // check is buffer created
        if( !$("#" + options.tablet.bufferId).length ) {
            var $navbar = $( options.tablet.navbarId );
            var $buffer = $("<div/>", {id: options.tablet.bufferId});

            $navbar.after( $buffer );
        }
    };

    // Move search form to boofer and back
    function moveSearchToBuffer(){
        $form.addClass( options.tablet.landscape.className );
        $form.appendTo( $("#" + options.tablet.bufferId) );
    };
    function moveSearchToDefault(){
        var defaultDiv = $( options.tablet.searchFormHoveDiv );

        $form.removeClass( options.tablet.landscape.className );
        $form.appendTo( defaultDiv );
    };

    // Set matchmedia rules
    mm(options.tablet.landscape.query, function(match) {
        // match = true or false

        if(match) {
            createSearchBuffer();
            moveSearchToBuffer();
        } else {
            moveSearchToDefault();
        }
    });
});
