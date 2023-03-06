"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

exports.__esModule = true;

exports.WildAnimals = void 0;
var Animals_1 = require("./Animals");
var WildAnimals = /** @class */ (function (_super) {
    __extends(WildAnimals, _super);
    function WildAnimals(someAnimalName) {
        return _super.call(this, someAnimalName) || this;
    }
    return WildAnimals;
}(Animals_1.Animals));
exports.WildAnimals = WildAnimals;
var lion = new WildAnimals('Lion - King Of The Jungle');
lion.category = ['4 legged', 'Canivorous'];
console.log('Lion Object is ', lion);
