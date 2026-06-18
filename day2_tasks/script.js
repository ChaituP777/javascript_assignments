// Task 1: Employee Registration
console.log("--- Task 1 ---");
let empName = "Chaitanya";
const empId = "EMP101";
let department = "Development";
let salary = 50000;
let isPermanent = true;

// using template literal to print multiple lines
console.log(`Employee Details
----------------
Name       : ${empName}
ID         : ${empId}
Department : ${department}
Salary     : ${salary}
Permanent  : ${isPermanent}`);


// Task 2: Employee Skills
console.log("\n--- Task 2 ---");
let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];
console.log(`First Skill : ${skills[0]}`);
console.log(`Third Skill : ${skills[2]}`);
console.log(`Last Skill  : ${skills[skills.length - 1]}`); // getting the last item
console.log(`Total Skills: ${skills.length}`);


// Task 3: Company Object
console.log("\n--- Task 3 ---");
const company = {
    companyName: "Stackly IT",
    location: "Coimbatore",
    employees: 150,
    technologies: ["MERN", "Java", "Python", "AWS"]
};
console.log(`Company Name      : ${company.companyName}`);
console.log(`Location          : ${company.location}`);
console.log(`Second Technology : ${company.technologies[1]}`);
console.log(`Total Technologies: ${company.technologies.length}`);


// Task 4: Salary Calculator
console.log("\n--- Task 4 ---");
let basicSalary = 30000;
let bonus = 5000;
let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10; // 10% tax
let finalSalary = totalSalary - tax;

console.log(`Total Salary : ${totalSalary}`);
console.log(`Tax (10%)    : ${tax}`);
console.log(`Final Salary : ${finalSalary}`);


// Task 5: Attendance Checker
console.log("\n--- Task 5 ---");
let attendance = 92;
// checking eligibility with ternary
let examStatus = attendance >= 75 ? "Eligible for Exam" : "Not Eligible";
console.log(examStatus);


// Task 6: Login Verification
console.log("\n--- Task 6 ---");
let username = "admin";
let password = "12345";
// both conditions must be true
let loginStatus = (username === "admin" && password === "12345") ? "Login Successful" : "Invalid Credentials";
console.log(loginStatus);


// Task 7: Product Billing
console.log("\n--- Task 7 ---");
let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;
let totalBill = productPrice * quantity;

console.log(`Product : ${productName}\n
Price : ${productPrice}\n
Quantity : ${quantity}\n
Total : ${totalBill}`);


// Task 8: Increment & Decrement
console.log("\n--- Task 8 ---");
let visitors = 100;

console.log(`Pre Increment (++visitors): ${++visitors}`); 
// adds 1 first, then prints 101

console.log(`Post Increment (visitors++): ${visitors++}`); 
// prints 101 first, then adds 1 in the background

console.log(`Pre Decrement (--visitors): ${--visitors}`);
// subtracts 1 from 102 to make it 101, then prints it

console.log(`Post Decrement (visitors--): ${visitors--}`);
// prints 101 first, then drops to 100


// Task 9: Comparison Checker
console.log("\n--- Task 9 ---");
console.log(10 == "10");   // true (only checks value)
console.log(10 === "10");  // false (checks value and type)
console.log(20 != "20");   // false (they are equal in value)
console.log(20 !== "20");  // true (strict check shows types are different)
console.log(5 < 10);       // true 
console.log(15 >= 20);     // false 
console.log(100 <= 100);   // true 


// Task 10: User Interaction
console.log("\n--- Task 10 ---");
let userEmpName = prompt("What is your Employee Name?");
let userEmpAge = prompt("What is your Employee Age?");
let wantsToJoin = confirm("Do you want to join our company?");

let interactionMessage = wantsToJoin ? `Welcome ${userEmpName}` : "Thank You";
alert(interactionMessage);


// Final Challenge: Employee Portal
console.log("\n--- Final Challenge ---");
let finalEmpName = "Chaitanya";
let finalEmpId = "EMP101";
let finalDept = "Development";
let expYears = 3;
let finalBaseSalary = 50000;
let finalBonus = 5000;
let finalTotalSalary = finalBaseSalary + finalBonus;
let finalSkills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];
let finalAttendance = 92;
let finalExamStatus = finalAttendance >= 75 ? "Eligible" : "Not Eligible";

let inputUsername = "admin";
let inputPassword = "12345";
let finalLoginStatus = (inputUsername === "admin" && inputPassword === "12345") ? "Success" : "Failed";

let finalCompany = { name: "Stackly IT", location: "Coimbatore" };

// expected output format from the task
console.log(`==============================
      EMPLOYEE PORTAL
==============================
Employee Name : ${finalEmpName}
Employee ID   : ${finalEmpId}
Department    : ${finalDept}
Experience    : ${expYears} Years
Salary        : ₹${finalBaseSalary}
Bonus         : ₹${finalBonus}
Final Salary  : ₹${finalTotalSalary}
Skills        : ${finalSkills.join(", ")}
Attendance    : ${finalAttendance}%
Exam Status   : ${finalExamStatus}
Login Status  : ${finalLoginStatus}
Company       : ${finalCompany.name}
Location      : ${finalCompany.location}
==============================`);


// Bonus Task: Shopping Bill Generator
console.log("\n--- Bonus Task ---");
const storeInfo = {
    name: "TechMart Superstore",
    location: "Downtown",
    isOnline: true
};

let cartItems = ["Wireless Mouse", "Mechanical Keyboard"];
let itemPrices = [1500, 4500];
let itemQuantities = [2, 1];

let item1Total = itemPrices[0] * itemQuantities[0];
let item2Total = itemPrices[1] * itemQuantities[1];
let subTotal = item1Total + item2Total;

// simple discount if subtotal is over 5000
let discount = subTotal > 5000 ? (subTotal * 0.10) : 0;
let finalAmountDue = subTotal - discount;

console.log(`------------------------------
   ${storeInfo.name} Bill
------------------------------
Item 1: ${cartItems[0]} (x${itemQuantities[0]}) = ₹${item1Total}
Item 2: ${cartItems[1]} (x${itemQuantities[1]}) = ₹${item2Total}
------------------------------
Subtotal     : ₹${subTotal}
Discount     : ₹${discount}
FINAL AMOUNT : ₹${finalAmountDue}
------------------------------
Thank you for shopping at our ${storeInfo.location} branch!`);
