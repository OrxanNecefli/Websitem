$(document).ready(function() {
    $("#btn").click(function() {
        var txt = "";
        txt += $(document).width() + " px "
        txt += $(document).height() + " px <br/>"
        txt += $(window).height() + " px "
        txt += $(window).width() + " px "
        $("h4").html(txt)
    });
})