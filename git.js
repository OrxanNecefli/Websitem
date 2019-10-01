var text = "burada or orrr orxa orxan ooooor  elementttler varr";
var ifade = new RegExp("or+", "gi")
var tst = text.match(ifade)
document.write(text + "<br/><br/>" + tst)