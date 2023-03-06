"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.brakes = function (position) {
        // write our logic
        return 'Car stopped!';
    };
    Vehicle.prototype.pompom = function (position) {
        // write our logic
        return true;
    };
    Vehicle.prototype.accelerator = function (level) {
        // write our logic
        return 'Increase speed!';
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var schoolBus = new Vehicle();
console.log('schoolBus accelerator says ', schoolBus.accelerator(5));
