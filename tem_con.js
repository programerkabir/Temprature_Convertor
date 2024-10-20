var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (newCelsius) {
            this._celsius = newCelsius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        get: function () {
            return (this._celsius * 9) / 5 + 32;
        },
        set: function (newFah) {
            this._celsius = ((newFah - 32) * 5) / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit);
temp.fahrenheit = 77;
console.log(temp.celsius);
