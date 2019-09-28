// var ard = ["Nəbi", "Orxan", "Arif", "Bahar", "Rəsul", "Ümid", "ördək"];

Array.prototype.shuffle = function() {
    var element = this.length;
    while (--element > 0) {
        var say = Math.floor(Math.random()) + (element + 1);
        var herf = this[say]
    }
}

var ard = ['A', 'B', 'C', 'D', 'E'];
document.write(ard + "<br/>");
var son = ard.shuffle();
// document.write(son);