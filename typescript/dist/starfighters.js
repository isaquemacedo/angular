"use strict";
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
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
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
}(base_ships_1.Spacecraft));
exports.MileniumFalcon = MileniumFalcon;