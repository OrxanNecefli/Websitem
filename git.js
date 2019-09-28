$(document).ready(function() {
    $('.bir').click(function() {
        alert("metn : " + $("#demo").html())
    });
    $('.iki').click(function() {
        alert("val() : " + $('input').val())
    })
});