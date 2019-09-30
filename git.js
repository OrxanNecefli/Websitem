var txt = "Orxan \n necesen Orxan, \n orxaN";
var ifade = new RegExp('^orxan', 'mi');
alert(txt.match(ifade));
var kontrol = ifade.ignoreCase;
document.write(mch + "<br/>" + kontrol)