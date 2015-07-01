/*
* Convert default Magento navigation to Bootstrap navigation
 */
(function ( $ ) {

        $.fn.magentoBootstrapNavigation = function() {

        var menu = function(){
            var $nav    = $(this);
            var $parent = $nav.find(".parent");

            // show/hide dropdown on :hover event
            $parent.on({
                mouseenter: function(){
                    $( this ).addClass("open")
                },
                mouseleave: function(){
                    $( this ).removeClass("open")
                }
            });

            // add bootstrap class to magento menu element
            $parent
                .addClass("dropdown")
                // default bootstrap feature: show dropdown when user click on menu item
                // .children("a").addClass("dropdown-toggle").attr("data-toggle", "dropdown")
                .children("a").addClass("dropdown-toggle")
                .append( ' <b class="caret"></b>')
                .next().addClass("dropdown-menu");
        };

        return this.each(menu);
    }
}( jQuery ));

jQuery(document).ready(function ($) {
    // run menu script
    $("#nav").magentoBootstrapNavigation();
});
