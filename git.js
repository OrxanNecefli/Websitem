$(document).ready(function() {
    $('.bir').click(function() {
<<<<<<< HEAD
        $('#demo0').html(function(index, oldhtml) {
            return "kohne metn : " + oldhtml + " bu yeni htnl'dir ! " + " (" + index + ") "
        })
    })
    $('.iki').click(function() {
        $('#demo1').text(function(index, oldtext) {
            return "kohne metn : " + oldtext + " bu yeni textdir! " + " (" + index + ")"
        })
=======
        alert("metn : " + $("#demo").html())
    });
    $('.iki').click(function() {
        alert("val() : " + $('input').val())
>>>>>>> newbranch
    })
});