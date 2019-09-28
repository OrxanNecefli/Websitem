function func() {
    var metn1 = $("<p></p>").text("jquery yaradilmish \"P\" elementi");
    var metn2 = document.createElement("P");
    metn2.innerHTML = "javascript element";
    $("body").append(metn1, metn2)
}
$(document).ready(function() {
    $("#btn").click(function() {
        var bir = $("<b></b>").text("bold yarat");
        var iki = $("<input type='text'/>").val("input")
        var uc = document.createElement("strong");
        uc.innerHTML = "strong element"
        $('p').append(bir, iki, uc)
    })
})