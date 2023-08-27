/** 
 * Filename: complex_code.js
 * Description: Example of complex JavaScript code
 */

// Class representing a person
class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  
  greet() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  startEngine() {
    console.log(`Starting ${this.brand} ${this.model}...`);
  }
  
  static about() {
    console.log("This is a car class.");
  }
}

// Class representing a calculator
class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(num) {
    this.result += num;
  }
  
  subtract(num) {
    this.result -= num;
  }
  
  multiply(num) {
    this.result *= num;
  }
  
  divide(num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      throw new Error("Cannot divide by zero.");
    }
  }
  
  clear() {
    this.result = 0;
  }
}

// Example usage of classes and functions
const john = new Person("John Doe", 30, "Engineer");
john.greet();

const tesla = new Car("Tesla", "Model S", 2021);
tesla.startEngine();
Car.about();

const calculator = new Calculator();
calculator.add(5);
calculator.multiply(3);
calculator.subtract(2);
calculator.divide(4);
console.log(calculator.result);  // Output: 4

// Some other code without clear purpose
const fibonacci = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
};

fibonacci(10);

const colors = {
  red: "#FF0000",
  green: "#00FF00",
  blue: "#0000FF"
};

for (const color in colors) {
  console.log(`${color}: ${colors[color]}`);
}

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Delayed execution complete.");
    }, Math.random() * 3000);
  });
};

const executeDelayedCode = async () => {
  console.log(await randomDelay());
};

executeDelayedCode();