let employees = [
    { name: "Naveen", id: 101, salary: 30000 },
    { name: "John", id: 102, salary: 60000 },
    { name: "Arun", id: 103, salary: 45000 }
];

// q1 highest salary
let highest = employees[0];
for (let e of employees) {
    if (e.salary > highest.salary) highest = e;
}
console.log(`Highest Salary : ${highest.salary}`);
console.log(`Employee Name : ${highest.name}`);
console.log("");

// q2 find by id
let searchId = 103;
let found = employees.find(e => e.id === searchId);
if (found) {
    console.log("Employee Found");
    console.log(`Name : ${found.name}`);
    console.log(`Salary : ${found.salary}`);
} else {
    console.log("Employee Not Found");
}
console.log("");

// q3 calc salary with bonus
let bonus = 5000;
employees.forEach(e => console.log(`${e.name} : ${e.salary + bonus}`));
console.log("");

// q4 experience check
let expEmployees = [
    { name: "Naveen", experience: 2 },
    { name: "John", experience: 7 },
    { name: "Arun", experience: 5 }
];
expEmployees.forEach(e => {
    let type = e.experience >= 5 ? "Senior Employee" : "Junior Employee";
    console.log(`${e.name} - ${type}`);
});
console.log("");

// q5 display names only
employees.forEach(e => console.log(e.name));
console.log("");

// q6 display ids only
employees.forEach(e => console.log(e.id));
console.log("");

// q7 total salary
let total = 0;
employees.forEach(e => total += e.salary);
console.log(`Total Salary : ${total}`);
console.log("");

// q8 earning more than 40k
employees.forEach(e => {
    if (e.salary > 40000) console.log(e.name);
});
console.log("");

// q9 increase salary
employees.forEach(e => {
    console.log(`${e.name} : ${e.salary + 5000}`);
});
console.log("");

// q10 employee report using template literal
employees.forEach(e => {
    console.log(`Employee Name : ${e.name}\nEmployee ID : ${e.id}\nSalary : ${e.salary}\n`);
});


// challenge task
console.log("challenge task");
let totalEmps = employees.length;

let hiEmp = employees[0];
let loEmp = employees[0];
let sumSal = 0;
let over40k = [];

employees.forEach(e => {
    if (e.salary > hiEmp.salary) hiEmp = e;
    if (e.salary < loEmp.salary) loEmp = e;
    sumSal += e.salary;
    if (e.salary > 40000) over40k.push(e.name);
});

console.log("total employees:", totalEmps);
console.log("highest salary:", hiEmp.salary);
console.log("lowest salary:", loEmp.salary);
console.log("total salary:", sumSal);
console.log("earning highest:", hiEmp.name);
console.log("earning lowest:", loEmp.name);
console.log("salary greater than 40k:", over40k.join(", "));

let cSearchId = 101;
let cFound = employees.find(e => e.id === cSearchId);
console.log(cFound ? `search id 101 found: ${cFound.name}` : "search id not found");

console.log("adding 5k bonus to everyone:");
employees.forEach(e => console.log(`${e.name} new salary: ${e.salary + 5000}`));

console.log("professional report:");
employees.forEach(e => {
    console.log(`Report => Name: ${e.name}, ID: ${e.id}, Salary: ${e.salary}`);
});
