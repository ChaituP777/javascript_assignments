// q1 student system
let students = [
    { name:"Naveen", id:101, mark:85 },
    { name:"John", id:102, mark:45 },
    { name:"Arun", id:103, mark:25 }
];
console.log(students);
students.forEach(s => console.log(s.name));
console.log(students.find(s => s.id === 102));
students.forEach(s => { if(s.mark >= 35) console.log(s.name) });
console.log(students.length);

// q2 employee system
let employees = [
    { name:"Naveen", salary:30000 },
    { name:"John", salary:45000 },
    { name:"Arun", salary:60000 }
];
let highest = Math.max(...employees.map(e => e.salary));
let lowest = Math.min(...employees.map(e => e.salary));
console.log("highest:", highest, "lowest:", lowest);
employees.forEach(e => console.log(`${e.name} with bonus: ${e.salary + 5000}`));
console.log("total sal:", employees.reduce((acc, curr) => acc + curr.salary, 0));
employees.filter(e => e.salary > 40000).forEach(e => console.log(e.name));

// q3 shopping cart
let products = [
    { name:"Laptop", price:50000 },
    { name:"Mouse", price:500 },
    { name:"Keyboard", price:1500 }
];
products.forEach(p => console.log(p.name));
let totalBill = products.reduce((acc, curr) => acc + curr.price, 0);
console.log("total bill:", totalBill);
console.log(products.find(p => p.name === "Mouse"));
console.log("discounted bill:", totalBill - (totalBill * 0.10));

// q4 bank
let account = { name:"Naveen", balance:50000 };
account.balance += 10000;
account.balance -= 5000;
console.log("balance:", account.balance);
console.log("is below 20k?", account.balance < 20000);
console.log(account);

// q5 login
let user = prompt("q5: enter username");
let pass = prompt("q5: enter password");
if (user === "admin" && pass === "123") {
    console.log("Welcome");
} else {
    console.log("Invalid Username or Password");
}

// q6 traffic signal
let signal = prompt("q6: enter signal color").toLowerCase();
switch(signal) {
    case "red": console.log("Stop"); break;
    case "yellow": console.log("Ready"); break;
    case "green": console.log("Go"); break;
    default: console.log("Invalid");
}

// q7 atm machine
let atmChoice = prompt("q7 atm: 1 Balance, 2 Deposit, 3 Withdraw, 4 Exit");
switch(atmChoice) {
    case "1": console.log("Balance selected"); break;
    case "2": console.log("Deposit selected"); break;
    case "3": console.log("Withdraw selected"); break;
    case "4": console.log("Exit selected"); break;
}

// q8 cricket score
let score = [10,25,40,60,80,100];
console.log("high:", Math.max(...score));
console.log("low:", Math.min(...score));
let totScore = score.reduce((a, b) => a + b, 0);
console.log("total:", totScore, "avg:", totScore / score.length);

// q9 movie ticket
let movieConfirm = confirm("q9: book a movie ticket?");
if (movieConfirm) {
    let age = Number(prompt("q9: enter age"));
    if (age >= 18) console.log("Allow Movie");
    else console.log("Not Allowed");
}

// q10 hospital
let token = prompt("q10 hospital: enter token 1, 2, or 3");
switch(token) {
    case "1": console.log("Doctor A"); break;
    case "2": console.log("Doctor B"); break;
    case "3": console.log("Doctor C"); break;
}

// q11 array methods
let fruits = ["Apple","Orange","Banana"];
fruits.push("Mango"); console.log("push:", fruits);
fruits.pop(); console.log("pop:", fruits);
fruits.shift(); console.log("shift:", fruits);
fruits.unshift("Kiwi"); console.log("unshift:", fruits);
fruits.splice(1, 1, "Grapes"); console.log("splice:", fruits);
console.log("slice result:", fruits.slice(0, 1));
console.log("original after slice:", fruits);

// q12 higher order methods
let employeesHOF = [
    {name:"A",salary:20000},
    {name:"B",salary:35000},
    {name:"C",salary:50000},
    {name:"D",salary:70000}
];
console.log("map:", employeesHOF.map(e => ({ name: e.name, salary: e.salary + 5000 })));
console.log("filter > 30k:", employeesHOF.filter(e => e.salary > 30000));
console.log("find 50k:", employeesHOF.find(e => e.salary === 50000));
console.log("reduce:", employeesHOF.reduce((acc, curr) => acc + curr.salary, 0));
console.log("some > 60k:", employeesHOF.some(e => e.salary > 60000));
console.log("every > 15k:", employeesHOF.every(e => e.salary > 15000));

// q13 string methods
let company = " Stackly IT ";
console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.trim());
console.log(company.replace("IT", "Software"));
console.log(company.includes("Stackly"));
console.log(company.trim().split(" "));

// q14 digital clock
let count = 0;
let clockTimer = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
    count++;
    if (count === 10) {
        clearInterval(clockTimer);
        console.log("clock stopped");
    }
}, 1000);

// q15 fetch fake store
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        console.log("api products:");
        data.forEach(p => console.log(p.title));
        data.forEach(p => console.log(p.price));
        data.filter(p => p.price > 100).forEach(p => console.log(p.title, p.price));
        console.log("total items:", data.length);
        console.log("categories:", [...new Set(data.map(p => p.category))]);
    });

// final mini project
let portal = [
    { id:1, name:"Alice", salary:45000 },
    { id:2, name:"Bob", salary:30000 },
    { id:3, name:"Charlie", salary:60000 }
];

console.log("--- mega portal ---");
console.log("view:", portal);
console.log("search 2:", portal.find(e => e.id === 2));

console.log("add bonus:", portal.map(e => ({...e, salary: e.salary + 5000})));

let salArr = portal.map(e => e.salary);
console.log("highest:", Math.max(...salArr));
console.log("lowest:", Math.min(...salArr));
console.log("total:", salArr.reduce((a, b) => a + b, 0));
console.log("over 40k:", portal.filter(e => e.salary > 40000));

portal.forEach(e => {
    console.log(`Report: ID ${e.id}, Name: ${e.name}, Salary: ${e.salary}`);
});

console.log("date:", new Date().toString());

fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        console.log("api fetched emps:", users.map(u => u.name));
    });
