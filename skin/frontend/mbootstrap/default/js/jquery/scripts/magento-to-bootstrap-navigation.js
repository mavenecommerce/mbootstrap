/*
* Convert default Magento navigation to Bootstrap navigation
 */
(function ( $ ) {

        $.fn.magentoBootstrapNavigation = function() {

        var menu = function(){
            var nav = $(this);

            nav.find(".parent")
                .addClass("dropdown")
                .children("a").addClass("dropdown-toggle").attr("data-toggle", "dropdown").append( ' <b class="caret"></b>')
                .next().addClass("dropdown-menu");
        };

        return this.each(menu);

    };

}( jQuery ));
