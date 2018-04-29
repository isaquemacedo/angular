var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
var episode = 4;
console.log(episode);
episode++;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = "BB-8";
console.log("My favorite droind is " + favoriteDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millenium Falcon ? " + (isEnoughToBeatMF(distance) ? 'YES' : 'No'));
var call = function (name) { return console.log("Do you copy, " + name + "? "); };
call('R2');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
var whatsIsInc = function (inc) { return inc <= 0 ? 0 : inc; };
console.log("\u00ECnc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
console.log("inc is 0 = " + inc(whatsIsInc(0)));
console.log("inc is 8 = " + inc(whatsIsInc(8)));
