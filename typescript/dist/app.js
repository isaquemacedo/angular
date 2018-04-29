var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering IntoHyperspace whit " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hiperdrive');
ship.jumpIntoHyperspace();
var MileniumFalcon = /** @class */ (function (_super) {
    __extends(MileniumFalcon, _super);
    function MileniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainer = 4;
        return _this;
    }
    MileniumFalcon.prototype.jumpIntoHyperspace = function () {
        if ((Math.random() * 10) >= 5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace');
        }
    };
    return MileniumFalcon;
}(Spacecraft));
var falcon = new MileniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the joob? " + (goodForTheJob(falcon) ? 'Yes' : 'No'));
