let mapButton = document.querySelectorAll("map-button");
$(document).ready(function () {
    $('.map-button').click(function () {
        $('.map-button').removeClass('active-map-button ').addClass('inactive');
        $(this).removeClass('inactive').addClass('active-map-button ');
    });
});
