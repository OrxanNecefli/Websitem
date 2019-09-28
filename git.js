$(document).ready(function() {
    $('.bir').click(function() {
        $('#demo0').html(function(index, oldhtml) {
            return "kohne metn : " + oldhtml + " bu yeni htnl'dir ! " + " (" + index + ") "
        })
    })
    $('.iki').click(function() {
        $('#demo1').text(function(index, oldtext) {
            return "kohne metn : " + oldtext + " bu yeni textdir! " + " (" + index + ")"
        })
    })
});