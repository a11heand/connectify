// Filename: advanced_data_processing.js
// Description: This code performs advanced data processing operations

// Define a function to calculate the factorial of a number
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}

// Define a class for creating complex numbers
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  getMagnitude() {
    return Math.sqrt(this.real ** 2 + this.imaginary ** 2);
  }

  getConjugate() {
    return new ComplexNumber(this.real, -this.imaginary);
  }

  add(other) {
    return new ComplexNumber(
      this.real + other.real,
      this.imaginary + other.imaginary
    );
  }

  multiply(other) {
    return new ComplexNumber(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real
    );
  }
}

// Define a function to generate the Fibonacci series up to a given limit
function generateFibonacciSeries(limit) {
  let fibSeries = [0, 1];
  while (fibSeries[fibSeries.length - 1] < limit) {
    fibSeries.push(
      fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]
    );
  }
  return fibSeries;
}

// Define a module for performing statistical calculations
const statistics = (function () {
  function mean(data) {
    return data.reduce((sum, value) => sum + value, 0) / data.length;
  }

  function median(data) {
    const sortedData = data.slice().sort();
    const mid = Math.floor(sortedData.length / 2);
    return sortedData.length % 2 !== 0
      ? sortedData[mid]
      : (sortedData[mid - 1] + sortedData[mid]) / 2;
  }

  function mode(data) {
    const countMap = new Map();
    let maxCount = 0;
    let modeValues = [];

    for (const val of data) {
      const count = (countMap.get(val) || 0) + 1;
      countMap.set(val, count);

      if (count > maxCount) {
        maxCount = count;
        modeValues = [val];
      } else if (count === maxCount) {
        modeValues.push(val);
      }
    }

    return modeValues;
  }

  return { mean, median, mode };
})();

// Usage examples

// Calculate factorial of 5
const factorialOfFive = calculateFactorial(5);
console.log(`Factorial of 5: ${factorialOfFive}`);

// Create complex numbers and perform operations
const complexNum1 = new ComplexNumber(3, 4);
const complexNum2 = new ComplexNumber(2, -1);

const magnitudeOfComplexNum1 = complexNum1.getMagnitude();
console.log(`Magnitude of Complex Number 1: ${magnitudeOfComplexNum1}`);

const conjugateOfComplexNum2 = complexNum2.getConjugate();
console.log(
  `Conjugate of Complex Number 2: ${conjugateOfComplexNum2.real} + ${conjugateOfComplexNum2.imaginary}i`
);

const sumOfComplexNumbers = complexNum1.add(complexNum2);
console.log(
  `Sum of Complex Numbers: ${sumOfComplexNumbers.real} + ${sumOfComplexNumbers.imaginary}i`
);

const productOfComplexNumbers = complexNum1.multiply(complexNum2);
console.log(
  `Product of Complex Numbers: ${productOfComplexNumbers.real} + ${productOfComplexNumbers.imaginary}i`
);

// Generate Fibonacci series up to the limit of 100
const fibonacciSeries = generateFibonacciSeries(100);
console.log(`Fibonacci Series up to 100: ${fibonacciSeries.join(", ")}`);

// Statistical calculations example
const data = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9];
const mean = statistics.mean(data);
const median = statistics.median(data);
const mode = statistics.mode(data);

console.log(`Mean: ${mean}`);
console.log(`Median: ${median}`);
console.log(`Mode: ${mode}`);