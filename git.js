var text = "Regexp menasi js jss jsss j nedir? ve JavaScript ya tekrarla";
document.write(text + "<br/><br/>");
var ifade = new RegExp("[menasi]");
var son = text.match(ifade);
document.write(son)