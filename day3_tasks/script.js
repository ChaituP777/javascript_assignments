// task 1 - employee details
console.log("--- task 1 ---");
let empName = prompt("enter employee name");
let empAge = prompt("enter employee age");
let empDept = prompt("enter employee department");
let empSalary = Number(prompt("enter employee salary"));

let employee = {
    name: empName,
    age: empAge,
    department: empDept,
    salary: empSalary
};

console.log(employee);

// checking if salary is over 30k
if (employee.salary > 30000) {
    console.log("Eligible for Bonus");
} else {
    console.log("Not Eligible");
}

// task 2 - billing
console.log("\n--- task 2 ---");
let prodName = prompt("enter product name");
let prodPrice = Number(prompt("enter product price"));
let prodQty = Number(prompt("enter quantity"));

let totalBill = prodPrice * prodQty;

// discount for bills over 5000
if (totalBill > 5000) {
    let discount = totalBill * 0.10;
    totalBill = totalBill - discount;
    console.log(`10% Discount Applied!`);
}

console.log(`Product: ${prodName}`);
console.log(`Final Amount: ₹${totalBill}`);

// task 3 - student grade
console.log("\n--- task 3 ---");
let studentName = prompt("enter student name");
let marks = Number(prompt("enter marks"));

console.log(`Student: ${studentName}`);
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// task 4 - atm logic
console.log("\n--- task 4 ---");
let userName = prompt("enter user name");
let balance = Number(prompt("enter account balance"));
let withdrawal = Number(prompt("enter withdrawal amount"));

console.log(`User: ${userName}`);
// check if we have enough money
if (withdrawal <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

// task 5 - login
console.log("\n--- task 5 ---");
let storedUsername = "admin";
let storedPassword = "12345";

let inputUser = prompt("enter username");
let inputPass = prompt("enter password");

// both need to match
if (inputUser === storedUsername && inputPass === storedPassword) {
    console.log("Login Successful");
} else {
    console.log("Invalid Username or Password");
}

// task 6 - food array
console.log("\n--- task 6 ---");
let foodItems = ["Pizza", "Burger", "Pasta", "Sushi", "Tacos", "Salad", "Steak", "Ice Cream"];

console.log(`First Item: ${foodItems[0]}`);
console.log(`Last Item: ${foodItems[foodItems.length - 1]}`); // get last item
console.log(`Total Number of Items: ${foodItems.length}`);

console.log("All food items:");
// looping through array
for (let item of foodItems) {
    console.log(item);
}

// task 7 - employee object loop
console.log("\n--- task 7 ---");
let directoryEmp = {
    name: "John Doe",
    age: 28,
    department: "HR",
    salary: 45000,
    experience: "5 Years"
};

// looping through object keys
for (let key in directoryEmp) {
    console.log(`${key}: ${directoryEmp[key]}`);
}

// task 8 - traffic lights
console.log("\n--- task 8 ---");
let signalColor = prompt("enter traffic signal color (red/yellow/green)").toLowerCase();

switch (signalColor) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid Signal");
}

// task 9 - age groups
console.log("\n--- task 9 ---");
let ageCat = Number(prompt("enter your age"));

if (ageCat >= 0 && ageCat <= 12) {
    console.log("Child");
} else if (ageCat >= 13 && ageCat <= 19) {
    console.log("Teenager");
} else if (ageCat >= 20 && ageCat <= 59) {
    console.log("Adult");
} else if (ageCat >= 60) {
    console.log("Senior Citizen");
} else {
    console.log("Invalid Age");
}

// task 10 - attendance ternary
console.log("\n--- task 10 ---");
let attName = prompt("enter employee name");
let isPresent = prompt("enter attendance (present/absent)");

console.log(`Welcome ${attName}`);
// one line if-else checking present or absent
let result = (isPresent.toLowerCase() === "present") ? "Attendance: Present" : "Attendance: Absent";
console.log(result);
