/* Filename: AdvancedDataProcessing.js */
/* 
   This code demonstrates advanced data processing techniques
   using JavaScript.
*/

// Create an array to store employee information
var employees = [
  {
    name: "John Doe",
    age: 28,
    department: "Marketing",
    salary: 50000
  },
  {
    name: "Jane Smith",
    age: 35,
    department: "Operations",
    salary: 60000
  },
  {
    name: "Mike Johnson",
    age: 42,
    department: "Sales",
    salary: 70000
  },
  // Add more employee objects here...
];

// Calculate the average salary of all employees
var totalSalary = 0;
for (var i = 0; i < employees.length; i++) {
  totalSalary += employees[i].salary;
}
var averageSalary = totalSalary / employees.length;

// Find the employee with the highest salary
var highestSalary = 0;
var highestPaidEmployee;
for (var i = 0; i < employees.length; i++) {
  if (employees[i].salary > highestSalary) {
    highestSalary = employees[i].salary;
    highestPaidEmployee = employees[i];
  }
}

// Print the average salary and the employee with the highest salary
console.log("Average Salary: $" + averageSalary.toLocaleString());
console.log("Highest Paid Employee:", highestPaidEmployee.name);

// Create a function to calculate bonus based on age and department
function calculateBonus(employee) {
  var bonus = 0;
  
  // Check if the employee is older than 30
  if (employee.age > 30) {
    bonus += employee.salary * 0.1;
  }
  
  // Check if the employee is in the Sales department
  if (employee.department === "Sales") {
    bonus += employee.salary * 0.15;
  }
  
  return bonus;
}

// Calculate bonus for each employee
for (var i = 0; i < employees.length; i++) {
  var employee = employees[i];
  var bonus = calculateBonus(employee);
  console.log(employee.name + "'s Bonus: $" + bonus.toLocaleString());
}

// Create a function to sort employees by salary in descending order
function sortBySalaryDesc(a, b) {
  return b.salary - a.salary;
}

// Sort employees array by salary in descending order
employees.sort(sortBySalaryDesc);

// Print the sorted employees array
console.log("Employees Sorted by Salary (Descending):");
for (var i = 0; i < employees.length; i++) {
  console.log(employees[i].name + " - $" + employees[i].salary.toLocaleString());
}

// ... Add more sophisticated and elaborate data processing code here ...

// End of code