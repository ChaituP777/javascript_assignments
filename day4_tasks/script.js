console.log("task 1");
let employees = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 }
];

// check who gets a bonus
for (let emp of employees) {
    if (emp.salary > 30000) {
        console.log(`${emp.name} : Employee Eligible For Bonus`);
    } else {
        console.log(`${emp.name} : Employee Not Eligible For Bonus`);
    }
}

console.log("");
console.log("task 2");
let math = Number(prompt("enter math marks"));
let sci = Number(prompt("enter science marks"));
let eng = Number(prompt("enter english marks"));

let totalMarks = math + sci + eng;
let percentage = (totalMarks / 300) * 100;

console.log(`total: ${totalMarks}, percentage: ${percentage.toFixed(2)}%`);

// grading logic
if (percentage >= 90) {
    console.log("grade: A+");
} else if (percentage >= 80) {
    console.log("grade: A");
} else if (percentage >= 70) {
    console.log("grade: B");
} else if (percentage >= 60) {
    console.log("grade: C");
} else {
    console.log("grade: Fail");
}


console.log("");
console.log("task 3");
let products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];

// calculating total with 10% discount if over 5k
function calculateBill(cart) {
    let total = 0;
    for (let item of cart) {
        total += item.price;
    }
    
    if (total > 5000) {
        let discount = total * 0.10;
        total = total - discount;
        console.log("10% discount applied!");
    }
    return total;
}

console.log(`total bill: ₹${calculateBill(products)}`);


console.log("");
console.log("task 4");
let storedUser = "admin";
let storedPass = "12345";

let inUser = prompt("enter username");
let inPass = prompt("enter password");

// login check
let authResult = (inUser === storedUser && inPass === storedPass) ? "Login Success" : "Invalid Credentials";
console.log(authResult);


console.log("");
console.log("task 5");
let color = prompt("enter traffic light color").toLowerCase();

switch (color) {
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


console.log("");
console.log("task 6");
let atmBalance = Number(prompt("enter your balance"));
let atmWithdraw = Number(prompt("enter withdrawal amount"));

// check if enough money
if (atmWithdraw <= atmBalance) {
    console.log("success: transaction successful");
} else {
    console.log("failure: insufficient balance");
}


console.log("");
console.log("task 7");

function orderPlaced(callback) {
    console.log("Order Received");
    callback(foodDelivered); // passing next step
}

function foodPrepared(callback) {
    console.log("Food Preparing");
    callback();
}

function foodDelivered() {
    console.log("Food Delivered");
}

orderPlaced(foodPrepared);


console.log("");
console.log("task 8");

function* cashbackGen() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offer = cashbackGen();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);


console.log("");
console.log("task 9");
let patAge = Number(prompt("enter patient age"));
let patWeight = Number(prompt("enter patient weight"));

if (patAge > 18) {
    if (patWeight > 50) {
        console.log("Eligible For Treatment");
    } else {
        console.log("Not Eligible");
    }
} else {
    console.log("Not Eligible");
}


console.log("");
console.log("task 10");
let portalEmployees = [];

// add emp
function addEmployee(name, id, salary) {
    portalEmployees.push({ name, id, salary });
    console.log(`added: ${name}`);
}

// view all
function viewEmployees() {
    console.log("all employees:");
    for (let e of portalEmployees) {
        console.log(`${e.name} - ${e.id}`);
    }
}

// calc 10% bonus
function calcBonus() {
    for (let e of portalEmployees) {
        console.log(`${e.name} bonus: ${e.salary * 0.10}`);
    }
}

// search by id
function searchEmployee(id) {
    for (let e of portalEmployees) {
        if (e.id === id) {
            console.log("found:", e.name);
            return;
        }
    }
    console.log("not found");
}

// delete by id
function deleteEmployee(id) {
    let index = -1;
    for (let i = 0; i < portalEmployees.length; i++) {
        if (portalEmployees[i].id === id) {
            index = i;
            break;
        }
    }
    
    if (index !== -1) {
        portalEmployees.splice(index, 1);
        console.log(`deleted emp id ${id}`);
    } else {
        console.log("id not found");
    }
}

// get count
function countEmployees() {
    console.log(`total employees: ${portalEmployees.length}`);
}


// testing the crud functions
addEmployee("Alice", 1, 50000);
addEmployee("Bob", 2, 60000);
addEmployee("Charlie", 3, 40000);

viewEmployees();
countEmployees();
calcBonus();

searchEmployee(2);
deleteEmployee(1);

viewEmployees();
countEmployees();
