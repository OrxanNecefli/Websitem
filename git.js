$(document).ready(function() {
    $(".bir").click(function() {
        $('#demo').css("background-color", "yellow").slideUp(4000).slideDown(4000)
    });
    $('.iki').click(function() {
        $('#demo').stop()
    })
});