// 1. Store employee name using var.
var employeeName = "Chaitanya";

// 2. Store employee age using let.
let employeeAge = 22;

// 3. Store company name using const.
const companyName = "Stackly";

// 4. Print all details using console.log().
console.log("Employee Name : " + employeeName);
console.log("Employee Age : " + employeeAge);
console.log("Company Name : " + companyName);

// -------------------------------------

// 5. Show a popup message:
alert("Welcome to Employee Portal");

// -------------------------------------

// 6. Ask the employee if they completed today's task
let isCompleted = confirm("Have you completed today's task?");
console.log(isCompleted);

// -------------------------------------

// 7. Ask the employee name using prompt().
let enteredName = prompt("Enter your name");
console.log("Entered Name: " + enteredName);

// -------------------------------------

// 8. Display the entered employee name on the webpage.
document.writeln("<h2>Welcome " + enteredName + "</h2>");

// -------------------------------------

// 9. Print a success message using console.warn().
console.warn("Task submitted successfully");

// -------------------------------------

// 10. Print an error message using console.error().
console.error("Task submission failed");

// -------------------------------------

// Bonus Task: Update employee age after promotion
let newAge = prompt("Enter the new age after promotion:");
employeeAge = newAge;
console.log("Updated Employee Age : " + employeeAge);
