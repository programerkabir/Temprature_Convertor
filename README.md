

```markdown
# Temperature Converter

This project demonstrates a simple **Temperature** class in TypeScript, allowing conversions between Celsius and Fahrenheit temperatures using getter and setter methods.

## Features

- **Celsius to Fahrenheit Conversion**: The temperature can be set in Celsius, and the corresponding Fahrenheit value can be retrieved.
- **Fahrenheit to Celsius Conversion**: The temperature can also be set in Fahrenheit, and the corresponding Celsius value can be retrieved.

## Code Overview

The `Temperature` class contains two private properties and uses getter and setter methods for conversions between Celsius and Fahrenheit:

- **celsius**: A getter and setter for Celsius temperature.
- **fahrenheit**: A getter and setter for Fahrenheit temperature.

### Example:

```typescript
class Temperature {
    private _celsius = 0;

    public get celsius() {
        return this._celsius;
    }

    public set celsius(newCelsius) {
        this._celsius = newCelsius;
    }

    public get fahrenheit() {
        return (this._celsius * 9) / 5 + 32;
    }

    public set fahrenheit(newFah: number) {
        this._celsius = ((newFah - 32) * 5) / 9;
    }
}

const temp: any = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // Output: 77°F

temp.fahrenheit = 77;
console.log(temp.celsius); // Output: 25°C
```

## How it works

1. **Setting Celsius**: You can set the Celsius temperature, and the code automatically calculates and returns the Fahrenheit equivalent.
   
   ```typescript
   temp.celsius = 25;
   console.log(temp.fahrenheit); // 77
   ```

2. **Setting Fahrenheit**: You can set the Fahrenheit temperature, and the code automatically calculates and returns the Celsius equivalent.

   ```typescript
   temp.fahrenheit = 77;
   console.log(temp.celsius); // 25
   ```

## Requirements

- This project is written in **TypeScript** and can be compiled into JavaScript.

## How to Run

1. Clone this repository.
2. Compile the TypeScript file.
3. Run the compiled JavaScript file using `node`.

```
tsc filename.ts
node filename.js
```

## License

This project is licensed under the MIT License.
```

This `README.md` gives an overview of your class, explains how the code works, and provides instructions on how to run it. You can copy-paste it into your GitHub repository.
