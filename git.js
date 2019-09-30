var a = "Javascript dunya uzre ve Azerbaycanda dunya en istifade edilen script dilidir";
document.write(a + "<br/><br/>");
var ifade = new RegExp("dunya(?! uzre)");
var son = ifade.test(a);
var son1 = a.search(ifade)
document.write(son + "<br/>" + son1)