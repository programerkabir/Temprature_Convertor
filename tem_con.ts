class Temperature {
    private _celsius = 0

    public get celsius(){
        return this._celsius;
    }

    public set celsius(newCelsius){
        this._celsius = newCelsius
    }

    public get fahrenheit(){
        return (this._celsius * 9 ) / 5 + 32;
    } 

    public set fahrenheit(newFah:number){
        this._celsius = ((newFah - 32) * 5) / 9

    }
}

const temp :any =   new Temperature();
temp.celsius = 25 ;
console.log(temp.fahrenheit);

temp.fahrenheit = 77
console.log(temp.celsius);
