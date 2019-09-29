Array.prototype.shuffle = function() {
    var elmnsay = this.length;
    while (--elmnsay > 0) {
        var rstsay = Math.floor(Math.random() * 6);
        var bir = this[rstsay];
        this[rstsay] = this[elmnsay]
        this[elmnsay] = bir;
        return this;
    }
}
var herf = ["A", 'B', 'C', "D", "E"];
document.write(herf + "<br/>")
var shuf = herf.shuffle()
document.write(shuf)