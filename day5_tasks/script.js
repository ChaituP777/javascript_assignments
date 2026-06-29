// q1
function yearlySalary(monthly) {
    return monthly * 12;
}
console.log(`Yearly Salary : ₹${yearlySalary(45000)}`);

// q2 pass or fail
function checkResult(marks) {
    if (marks >= 35) return "Pass";
    return "Fail";
}
console.log(checkResult(72));

// q3 food bill
function foodBill(price, qty) {
    return price * qty;
}
console.log(`total bill: ₹${foodBill(180, 3)}`);

// q4 welcome msg
function welcomeEmp(name, dept) {
    console.log(`Welcome ${name}`);
    console.log(`Department : ${dept}`);
}
welcomeEmp("Naveen", "Development");

// q5 discount math
function finalAmount(price, discount) {
    return price - discount;
}
console.log(`final amount: ₹${finalAmount(5000, 500)}`);

// q6 login using callback
function login(cb) {
    console.log("Login Successful");
    cb();
}
function loadDashboard() {
    console.log("Loading Dashboard...");
}
login(loadDashboard);

// q7 delivery steps
function receiveOrder(nextStep) {
    console.log("Order Received");
    nextStep(outForDelivery);
}
function prepareFood(nextStep) {
    console.log("Preparing Food");
    nextStep(delivered);
}
function outForDelivery(nextStep) {
    console.log("Out for Delivery");
    nextStep();
}
function delivered() {
    console.log("Delivered");
}
receiveOrder(prepareFood);

// q8 lucky draw generator
function* luckyDraw() {
    yield "10%";
    yield "20%";
    yield "50%";
    yield "Better Luck Next Time";
}
let draw = luckyDraw();
console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);
console.log(draw.next().value);

// q9 bonus calc (currying)
function bonus(salary) {
    return function(b) {
        console.log(`Total Salary : ${salary + b}`);
    };
}
bonus(50000)(5000);

// q10 merging two objects
let employeePersonal = { name: "Naveen", age: 25 };
let employeeOffice = { id: 101, dept: "Development" };
let mergedEmp = { ...employeePersonal, ...employeeOffice };
console.log(mergedEmp);

// q11 merging arrays
let cart1 = ["Mouse", "Keyboard"];
let cart2 = ["Monitor", "Laptop"];
let mergedCart = [...cart1, ...cart2];
console.log(mergedCart);

// q12 rest operator
function student(name, ...marks) {
    let total = 0;
    for (let m of marks) total += m;
    let avg = total / marks.length;
    
    console.log(`Student : ${name}`);
    console.log(`Total Marks: ${total}`);
    console.log(`Average: ${avg}`);
}
student("Naveen", 90, 85, 88, 95);

// q13 obj destructuring
let productObj = { name: "Laptop", price: 65000, brand: "Dell", stock: 20 };
let { name, price } = productObj;
console.log(name, price);

// q14 arr destructuring
let custArr = [101, "Naveen", "Chennai", 9876543210];
let [id, custName, city] = custArr;
console.log(id, custName, city);

// q15 push item
let addCart = ["Mobile", "Laptop"];
addCart.push("Headphone");
console.log(addCart);

// q16 pop last item
let removeCart = ["Mobile", "Laptop", "Headphone"];
removeCart.pop();
console.log(removeCart);

// q17 splice
let empArr = ["Rahul", "Arun", "John", "David"];
empArr.splice(2, 1, "Naveen");
console.log(empArr);

// q18 includes
let searchProds = ["Mouse", "Keyboard", "Monitor", "Laptop"];
console.log(searchProds.includes("Laptop"));

// q19 sort numbers
let salaries = [25000, 45000, 30000, 70000];
salaries.sort((a, b) => a - b);
console.log(salaries);

// q20 reverse
let messages = ["Hi", "Hello", "How are you?", "Good Morning"];
messages.reverse();
console.log(messages);


// bonus project - mini portal
let portal = [];

function addEmp(id, name, salary) {
    portal.push({ id, name, salary });
}

function viewEmps() {
    for (let e of portal) {
        let { id, name, salary } = e;
        console.log(`id:${id} name:${name} salary:${salary}`);
    }
}

function searchById(id) {
    let emp = portal.find(e => e.id === id);
    console.log(emp ? emp : "no match");
}

function searchByName(n) {
    let emp = portal.find(e => e.name === n);
    console.log(emp ? emp : "no match");
}

function addBonus(amount) {
    portal.forEach(e => {
        let { name, salary } = e;
        console.log(`${name} gets ${salary + amount}`);
    });
}

function deleteEmp(id) {
    let idx = portal.findIndex(e => e.id === id);
    if (idx !== -1) {
        portal.splice(idx, 1);
    }
}

function sortEmps() {
    portal.sort((a, b) => a.salary - b.salary);
}

// running the project
addEmp(1, "Alice", 45000);
addEmp(2, "Bob", 30000);
addEmp(3, "Naveen", 60000);

console.log("\nviewing original");
viewEmps();

console.log("\nsorted");
sortEmps();
viewEmps();

console.log("\nsearch");
searchById(2);
searchByName("Naveen");

console.log("\nbonus");
addBonus(5000);

console.log("\nafter delete 1");
deleteEmp(1);
viewEmps();
