function func() {
    var metn1 = $("<p></p>").text("jquery yaradilmish \"P\" elementi");
    var metn2 = document.createElement("P");
    metn2.innerHTML = "javascript element";
    $("body").append(metn1, metn2)
}