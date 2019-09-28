$(document).ready(function() {
    $('.bir').click(function() {
        $('#demo0').html("<strong>strong oldu</strong>")
    });
    $(".iki").click(function() {
        $('#demo1').text("text deyisdi")
    });
    $(".uc").click(function() {
        $('#demo2').val("value deyerin deyisdim")
    })
});