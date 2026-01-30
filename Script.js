console.log("javascript is running")
const name = "Abhinav Rai";
const birthyear = 2004;

let age = 2026 - birthyear;

console.log("Name: ", name);
console.log("Age: ", age);
console.log(typeof name);

console.log(typeof age);

const employed = false;
let job = null;
let salary;

console.log(typeof employed);
console.log(typeof job);
console.log(typeof salary);

// Operators
// Arithmetic

let a = 5;
let b = 6;

console.log(a + b);
console.log(a - b);
console.log(a / b);
console.log(a * b);
console.log(a % b)

//Comparison

console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 4);

// == and ===
console.log(10 == "10");
console.log(10 ==="10");

//logical

let agge = 21;
console.log(agge > 18 && agge < 30);
console.log(agge > 25 || agge < 30);
console.log(!true);

// if and else

let marks = 70;

if (marks >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}

let score = 85;
if (score >= 90){
    console.log("Grade A");
} else if (score >= 75) {
    console.log("Grade B")
} else {
    console.log("Grade C")
}

//function

function add(a, b){
    return a + b;
}

let result = add(5, 3);
console.log(result);
 
const greet = name => "Hello " + name;
console.log(greet("Abhinav Rai"))

//Arrays
const numbers = [1, 2, 3, 4, 5];
const names = ["Abhinav", "Rahul"];

console.log(names[0]);
console.log(names[1]);

names.push("Rohit")
console.log(names)

//Map

const number_arr = [1, 2, 3, 4, 5]

const doubled = number_arr.map(num => num * 2)

console .log(doubled)

//Object

const person = {
    name : "Abhinav",
    age : 22,
    city : "Delhi"
}

console.log(person.name);
console.log(person["name"]);

//for loop

for (let i = 1; i <= 5; i++) {
    console.log(i)
}

//while loop

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}