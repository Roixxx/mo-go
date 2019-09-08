
/* accordion collapse */

$(function() {

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data("collapse");

        $(blockId).slideToggle();
    });

});