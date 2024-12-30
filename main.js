// video 10 Data Types 

// console.log(typeof "hello world"); // string
// console.log(typeof 123); // number
// console.log(typeof 99.99); // number
// console.log(typeof NaN); // number
// console.log(typeof true); // boolean
// console.log(typeof [1, 2, 3]); // object
// console.log(typeof ["apple", "banana", "orange"]); // object
// console.log(typeof { name: "John", age: 30 }); // object
// console.log(typeof null); // object
// console.log(typeof undefined); // undefined

// video 11 Variables 

// var user = "John"; // var can be deleted

// var first = hello.innerHTML = "Hello " + user; // hello is id and i get it from index.html

// console.log(first);

// video 12  Identifiers Name Conventions

// var camelCase = "helloWorld";
// var snake_case = "hello_world";
// var kebab_case = "hello-world";

// video 13 Var, Let, Const Compare

// var a = 1;
// var a = 2;
// // var can be redeclare
// // var can access before declare
// // var => scope drama (add in window object ) => true

// let a = 1;
// let a = 2;
// // error: let cannot be redeclare
// // error: let cannot access before declare
// // let => scope drama (in window object ) => false

// const a = 1;
// const a = 2;
// // error: const cannot be redeclare
// // error: const cannot access before declare
// // const => scope drama (in window object ) => false

// video 14 => Character Escape Sequences

// Escape => \
// console.log('hello "Gemy"'); // hello "Gemy"
// console.log("hello \"Gemy\""); // hello "Gemy"

// // Newline => \n
// console.log("hello\nGemy"); // hello
// // Gemy

// video 15 => Concatenation

// var name = "Gemy";
// var age = 20;
// var message = "My name is " + name + ", and I am " + age + " years old.";
// console.log(message);

// video 16 => Concatenation with Template Literals es6

// var name = "Gemy";
// var age = 20;
// var message = `My name is ${name}, and I am ${age} years old.`;
// console.log(message);

// video 17 => Challenge

// video 18 => Arithmetic Operators

// var a = 10;
// var b = 5;
// var c = a + b;
// var d = a - b;
// var e = a * b;
// var f = a / b;
// var g = a % b;
// var h = a ** b;
// console.log(c); // 15
// console.log(d); // 5
// console.log(e); // 50
// console.log(f); // 2
// console.log(g); // 0
// console.log(h); // 100000
// console.log(a++); // 10 post increament
// console.log(a); // 11   must print it to increament
// console.log(++a); // 12 pre increament directly
// console.log(a--); // 12 post decreament
// console.log(a); // 11 must print it to decreament
// console.log(--a); // 10 pre decreament directly

// video 19 => Unary Plus And Negation Operators

// console.log(100); // number
// console.log("100"); // string
// console.log(+"100"); // number 100
// console.log(+"gemy"); // NaN
// console.log(+true); // 1
// console.log(+false); // 0
// console.log(+null); // 0

// console.log(100); // number
// console.log("100"); // string
// console.log(-"100"); // number -100
// console.log(-"gemy"); // NaN
// console.log(-true); // -1
// console.log(-false); // -0
// console.log(-null); // -0

// console.log(Number("100")); //100

// video 20 => Type Coercion

// var a = 10;
// var b = "10";
// var c = a + b;
// console.log(c); // 1010

// var a = 10;
// var b = "10";
// var c = a + +b;
// console.log(c); // 20

// var a = 10;
// var b = "20";
// var c = a - b;
// console.log(c); // -10

// video 21 => Assignment Operators

// let a = 10;
// a = a + 20; //30
// a += 20; //50
// a -= 10; //40

// console.log(a);

// video 22 => Challenge

// video 23 => Number

// console.log(1000000); // 1000000
// console.log(1_000_000); // 1000000
// console.log(1e6); // 1000000
// console.log(10 ** 6); // 1000000
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
// console.log(Number.MIN_VALUE); // 5e-324

// video 24 => Number Methods

// console.log((100).toString()); // 100
// console.log(100..toString()); // 100
// console.log((100.5555).toFixed(2)); // 100.56
// console.log(parseInt("100 gemy")); // 100
// console.log(parseFloat("100.500 gemy")); // 100.5
// console.log(parseFloat(100.500)); // 100.5

// video 25 => Math Object

// console.log(Math.round(99.5)); // 100
// console.log(Math.ceil(99.5)); // 100
// console.log(Math.floor(99.5)); // 99
// console.log(Math.max(1, 2, 3, 4, 5)); // 5
// console.log(Math.min(1, 2, 3, 4, 5)); // 1
// console.log(Math.pow(2, 3)); // 8
// console.log(Math.random()); // random number
// console.log(Math.sqrt(16)); // 4
// console.log(Math.trunc(99.5)); // 99

// video 26 => Challenge

// video 27 => String Methods

// let name = "Gemy";
// let user = " ali ";

// console.log(name); // Gemy
// console.log(name[0]); // G
// console.log(name.charAt(0)); // G
// console.log(name.length); // 4
// console.log(user.trim()); // ali
// console.log(user.toUpperCase()); // ALI
// console.log(user.toLocaleLowerCase()); // ali
// console.log(user.trim().charAt(1).toUpperCase()); // L

// video 28 => String Methods

// let person = "mohamed";
// let person2 = "mohamed|Gamal";

// console.log(person.indexOf("o")); // 1
// console.log(person.indexOf('m')); // 0
// console.log(person.lastIndexOf('m')); // 4
// console.log(person.slice(0, 3)); // moh
// console.log(person.slice(-2)); // ed
// console.log(person.slice(-2, -1)); // e
// console.log(person.repeat(3)); // mohamedmohamedmohamed
// console.log(person.split()); // ['mohamed']
// console.log(person.split("")); // ['m', 'o', 'h', 'a', 'm', 'e', 'd']
// console.log(person2.split("|")); //  ['mohamed', 'Gamal']

// video 29 => String Methods

// console.log(person2.substring(8, 11)); // Gam
// console.log(person2.substring(-5, 7)); // mohamed
// console.log(person2.substr(0, 3)); // moh
// console.log(person.startsWith("m")); // true
// console.log(person.endsWith("d")); // true
// console.log(person.includes("o")); // true

// video 30 => Challenge

// video 31 => Comparison Operators

// console.log(10 == 10); // true
// console.log(10 == "10"); // true
// console.log(10 === "10"); // false
// console.log(10 != 10); // false
// console.log(10 !== "10"); // true
// console.log(10 > 10); // false
// console.log(10 < 10); // false
// console.log(10 >= 10); // true
// console.log(10 <= 10); // true

// video 32 => Logical Operators

// console.log(true); // true
// console.log(!true); // false
// console.log(false); // false
// console.log(!false); // true
// console.log(10 == 10 && 10 > 5); // true
// console.log(10 == 10 || 10 < 5); // true

// video 33 => If Condition
// video 34 => Nested If Condition

// let price = 100;
// let discount = false;
// let discountValue = 30;
// let country = "Egypt";
// let student = true;

// if (discount === true) {
//     price -= discountValue;
// } else if (country === "Egypt") {
//     if (student === true) {
//         price -= 40;
//     }

// } else if (country === "Egypt" && student == false) {
//     price -= 10;
// } else {
//     price -= 20;
// }

// console.log(price);

// video 35 => Conditional Ternary Operator

// let theName = "Mona";
// let theGender = "Female";
// let theAge = 30;

// // if (theGender === "Male") {
// //     console.log("Mr. " + theName);
// // } else {
// //     console.log("Mrs. " + theName);
// // }

// // theGender === "Male" ? console.log("Mr. " + theName) : console.log("Mrs. " + theName);
// let result = theGender === "Male" ? "Mr. " + theName : "Mrs. " + theName;
// document.write(result);

// video 36 => Nullish Coalescing Operator And Logical

// let price = 100;

// console.log(`the price is ${price || 0}`);
// console.log(`the price is ${price ?? 0}`);

// video 37 => Challenge

// video 38 => Switch Statement

// let day = 3;

// switch (day) {
//     case 0:
//         console.log("saturday");
//         break;
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//     case 3:
//         console.log("monday");
//         break;
//     default:
//         console.log("no day");
//         break;
// }

// video 39 => Challenge

// video 40 => Array

// let myFriends = ["ahmed", "mohamed", "sayed", ["ali", "ahmed", "mohamed"]];

// console.log(`the first friend is ${myFriends[0]}`); // the first friend is ahmed
// console.log(`${myFriends[1][2]}`); //h
// console.log(`${myFriends[3][0]}`); // ali
// console.log(myFriends);
// myFriends[2] = 'Gamal';
// console.log(myFriends);
// console.log(typeof myFriends); //object
// console.log(Array.isArray(myFriends)); //true

// video 41 => Using Length With Arrays

// console.log(myFriends.length); // 4

// video 42 => Add And Remove From Array

// myFriends.unshift("sayed");
// console.log(myFriends); // ['sayed', 'ahmed', 'mohamed', 'sayed', ['ali', 'ahmed', 'mohamed']]
// myFriends.shift();
// console.log(myFriends); // ['ahmed', 'mohamed', 'sayed', ['ali', 'ahmed', 'mohamed']]
// myFriends.pop();
// console.log(myFriends); // ['ahmed', 'mohamed', 'sayed']
// myFriends.push("ali");
// console.log(myFriends); // ['ahmed', 'mohamed', 'sayed', 'sayed']

// video 43 => Searching Array

// console.log(myFriends.indexOf("ahmed")); // 0
// console.log(myFriends.includes("ahmed")); // true

// video 44 => Sorting Array

// let myArr = [1, -1, 0, "ahmed", "mohamed", "sayed", 10, 100, 200];

// console.log(myArr.sort()); // [-1, 0, 1, 10, 100, 200, 'ahmed', 'mohamed', 'sayed']
// console.log(myArr.reverse()); // ['sayed', 'mohamed', 'ahmed', 200, 100, 10, 1, 0, -1]

// video 45 => Slicing Array

// let Arr = [1, -1, 0, "ahmed", "mohamed", "sayed", 10, 100, 200];

// // console.log(Arr.slice(0, 3)); // [1, -1, 0]
// // console.log(Arr.slice(-3)); // [10, 100, 200]
// // console.log(Arr.splice(0, 3)); // [1, -1, 0]
// Arr.splice(0, 3, "hamo");
// console.log(Arr); // [1, -1, 0]

// video 46 => Joining Array

// let myNewFriends = ["ali", "ahmed", "mohamed", "sayed"];
// let mySchoolFriends = ['mona', 'hend', 'mido'];

// let allFriends = myNewFriends.concat(mySchoolFriends, "gamal");
// console.log(allFriends);

// let a = allFriends.join("|");
// a = allFriends.join("@");
// a = allFriends.join(" ");
// console.log(a);

// video 47 => Challenge

// video 48 => Loop

// for (let i = 1; i <= 10; i++) {
//     console.log(i); // 1 2 3 4 5 6 7 8 9 10
// }

// video 49 => Looping On Sequences

// let myArray = ["ali", "ahmed", "mohamed", "sayed"];
// let myArray2 = [1, 2, "ali", "ahmed", "mohamed", "sayed"];

// let onlyNames = [];

// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i]); // ali ahmed mohamed sayed
// }

// for (let y = 0; y < myArray2.length; y++) {
//     if (typeof myArray2[y] === "string") {
//         onlyNames.push(myArray2[y]);
//     }
// }

// console.log(onlyNames);

// video 50 => Nested Loops

// let products = ["car", "phone", "laptop", "tablet"];
// let colors = ["red", "green", "blue", "yellow"];
// let models = [2024, 2025];

// for (let i = 0; i < products.length; i++) {
//     console.log('#'.repeat(15));
//     console.log(products[i]);
//     console.log('#'.repeat(15));

//     console.log("colors: ");
//     for (let y = 0; y < colors.length; y++) {
//         console.log(colors[y]);
//     }

//     console.log("models: ");
//     for (let x = 0; x < models.length; x++) {
//         console.log(models[x]);
//     }
// }

// video 51 =>  Loop Control - Break, Continue, Label

// let prod = ["car", "phone", "laptop", "tablet"];

// break
// for (let i = 0; i < prod.length; i++) {
//     if (prod[i] === "laptop") {
//         break; // car phone
//     }
//     console.log(prod[i]);
// }

// continue
// for (let i = 0; i < prod.length; i++) {
//     if (prod[i] === "laptop") {
//         continue; // car phone tablet
//     }
//     console.log(prod[i]);
// }

// label
// outer: for (let i = 0; i < prod.length; i++) {
//     for (let y = 0; y < 5; y++) {
//         if (prod[i] === "laptop") {
//             break outer; // car phone
//         }
//         console.log(prod[i]);
//     }
// }

// video 52 => Loop

// video 53 => Practice - Add Products To Pag

// let prods = ["car", "phone", "laptop", "tablet", "tv"];
// let colors = ["red", "green", "blue", "yellow"];
// let showCount = 5;

// document.write(`<h1>show ${showCount} Products</h1>`);

// for (let i = 0; i < showCount; i++) {

//     document.write(`<div>`);
//     document.write(`<h2>${prods[i]}</h2>`);
//     for (let y = 0; y < colors.length; y++) {
//         document.write(`<p>${colors[y]}</p>`);
//     }
//     document.write(`<p>${colors.join(" | ")}</p>`);
//     document.write(`</div>`);

// }

// video 54 => Loop - While

// let prods = ["car", "phone", "laptop", "tablet", "tv"];
// let i = 0;
// while (i < prods.length) {
//     console.log(prods[i]);
//     i++;
// }

// video 55 => Loop - Do While

// let prods = ["car", "phone", "laptop", "tablet", "tv"];
// let i = 0;

// do {
//     console.log(prods[i]);
//     i++;
// }
// while (false) {
//     console.log(prods[i]);
// }

// video 55 => Challenge

// video 56 => Function Intro

// function sayHello() {
//     console.log("hello");
// }
// sayHello();

// function sayHello2(name) {
//     console.log(`hello ${name}`);
// }
// sayHello2("gemy");

// video 57 => Function Advanced Examples

// function sayHello3(name, age) {
//     console.log(`hello ${name}, your age is ${ age }`);
// }
// sayHello3("gemy", 22);

//////////////////////////

// function generateYears(start, end, exclude) {
//     for (let i = start; i <= end; i++) {
//         if (i === exclude) {
//             continue;
//         }
//         console.log(i);
//     }
// }
// generateYears(2002, 2024, 2020); // 2002:2024 exclude 2020

// video 59 => Function Return

// function sayHello4(name) {
//     return `hello ${name}`
// }
// console.log(sayHello4("gemy"));

// function calc(num1, num2) {
//     return num1 + num2;
// }
// console.log(calc(1, 2));

// function generate(start, end) {
//     for (let i = start; i <= end; i++) {
//         if (i === 15) {
//             return;
//         }
//         console.log(i); // 10 11 12 13 14
//     }
// }
// generate(10, 20);

// video 60 => Function Default Parameters

// function sayHello4(name = "unknown") {
//     console.log(`hello ${name}`);
// }
// sayHello4("gemy"); // hello gemy
// sayHello4(); // hello unknown

// video 61 =>Function Rest Parameter

// function calc(...numbers) {
//     // console.log(Array.isArray(numbers)); // true

//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     }
//     console.log(sum); // 15

// }
// calc(1, 2, 3, 4, 5);

// video 62 => Function Ultimate Practice

// ...skills is Rest Parameter

// function showInfo(us = 'un', ag = 'un', rt = 0, show = "Yes", ...skills) {
//     document.write(`<div>`);
//     document.write(`<h2>welcome ${us}</h2>`);
//     document.write(`<p>Age: ${ag}</p>`);
//     document.write(`<p>Hourly Rate: $${rt}</p>`);
//     if (show === "Yes") {
//         if (skills.length === 0) {
//             document.write(`<p>Skills: No skills</p>`);
//         } else {
//             document.write(`<p>Skills: ${skills.join(" | ")}</p>`);
//         }
//     } else {
//         document.write(`<p>Skills: Not Available</p>`);
//     }
//     document.write(`</div>`);
// }
// showInfo("gemy", 22, 50, "Yes", "html", "css", "js");

// video 63 => Challenge

// video 64 => Anonymous Function

// let calculate = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(calculate(1, 2));

// video 65 => Return Nested Function

// function sayMessage(fName, lName) {
//     let message = "hello";

//     function contactMsg() {
//         message = `${message} ${fName} ${lName}`;
//     }
//     contactMsg();
//     return message;
// }
// console.log(sayMessage("gemy", "mohamed"));

// video 66 => Arrow Function Syntax

// function print() {
//     return 10;
// }
// console.log(print());

// arrow function
// let print = () => {
//     return 10;
// }
// console.log(print());

// video 67 => Scope - Global And Local

// var a = 1;
// let b = 2;

// function showText() {
//     var a = 10;
//     let b = 20;
//     console.log(`Function - From local scope ${a}`); // access from local scope: 10
//     console.log(`Function - From local scope ${b}`); // access from local scope: 20
// }

// console.log(`From global scope ${a}`); // access from global scope not local: 1
// console.log(`From global scope ${b}`); // access from global scope not local: 2

// showText();

// video 68 => Block Scope [if, switch, for]

// var x = 10;

// if (10 === 10) {
//     var x = 50;
// }
// console.log(x); //50

//////////////////////////

// var x = 10;

// if (10 === 10) {
//     let x = 50;
//     console.log(x); //50
// }
// console.log(x); // 10

// video 69 => Scope

// video 70 => challenge arrow function

// // challenge 1
// let names = (...persons) => `[${persons.join("],[")}]`;
// console.log(names("osama", 'mohamed', 'ali', "ibrahim")); // [osama], [mohamed], [ali], [ibrahim]

// // challenge 2

// let myNumbers = [20, 50, 10, 60];
// let calc = (one, two, ...nums) => one + two + nums[0];
// console.log(calc(10, myNumbers[0], myNumbers[1])); //80

// video 71 => Higher Order Functions - Map

// let myNums = [1, 2, 3, 4, 5, 6];

// let addSelf = myNums.map(num => num + num);
// console.log(addSelf); // [2, 4, 6, 8, 10, 12]

// video 72 => Higher Order Functions - Map Practice

// let swappingCases = "elZERo";
// let invertedNumbers = [1, -10, -20, 15, 100, -30];
// let ignoreNumbers = "Elz123er4o";

// let sw = swappingCases.split('').map((el) => el === el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('');
// console.log(sw); // "ELzerO"

// let numsR = invertedNumbers.map((el) => -(el));
// console.log(numsR); // [-1, 10, 20, -15, -100, 30]

// let ignArr = [];
// let ign = ignoreNumbers.split('').map((el) => isNaN(el) && ignArr.push(el));
// let ignResult = ignArr.join('');
// console.log(ignResult); // elzero

// video 73 => Higher Order Functions - Filter

//return names start with A
// let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

// return even only
// let numbers = [11, 20, 2, 5, 17, 10];

// let friendsA = friends.filter((el) => el.startsWith("A"));
// console.log(friendsA); //['Ahmed', 'Asmaa', 'Amgad']

// let NumsEven = numbers.filter((el) => el % 2 === 0);
// console.log(NumsEven); // [20, 2, 10]

// video 74 => Higher Order Functions - Filter Practice

// let sentence = "I Love Foood Code Too Playing Much";

// let smallWords = sentence.split(" ").filter((el) => el.length <= 4).join(' ');
// console.log(smallWords); // I Love Code Too Much

// Filter-Strings + Multiply
// let mix = "A13BS2ZX";

// let gg = mix.split("").filter((el) => parseInt(el)); //132
// let hh = gg.map((el) => el * el) // 194
// console.log(hh);

// video 75 => Higher Order Functions - Reduce
// video 76 => Higher Order Functions - Reduce

// let nums = [10, 20, 15, 30];

// let sum = nums.reduce((acc, el, index, array) => acc + el);
// console.log(sum);

// video 77 => Higher Order Functions - ForEach

// difference between forEach and map

// // forEach
// const arr = [1, 2, 3, 4];
// arr.forEach(element => {
//     console.log(element); // سيقوم بطباعة كل عنصر في المصفوفة1, 2, 3, 4
// });

// //map
// const arr2 = [1, 2, 3, 4];
// const myArr = arr2.map(element => element);
// console.log(myArr); // [1, 2, 3, 4]

// video 78 => Higher Order Functions - Challenge

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
// var solution = myString.split(',').filter((el) => isNaN(el)).map((el) => el === '_' ? " " : el).slice(1, -1).reduce((acc, el) => `${acc}${el}`);
// console.log(`E${solution}`); // Elzero Web School

// video 79 => Object - Introduction

// let user = {
//     //properties
//     name: "Gemy",
//     age: 22,
//     country: "Egypt",
//     city: "Nasr City",

//     //methods
//     sayHello: function() {
//         return `Hello ${this.name}`;
//     }
// }

// console.log(user.name);
// console.log(user.sayHello());

// video 80 => Dot Notation vs Bracket Notation

// let user2 = {
//     //properties
//     name: "Gemy",
//     age: 22,
//     "country of": "Egypt",
//     city: "Nasr City",

//     //methods
//     sayHello: function() {
//         return `Hello ${this.name}`;
//     }
// }

// let myVar = 'city';

// // dot notation
// console.log(user2.name);

// // bracket notation
// console.log(user2["name"]);
// console.log(user2["country of"]);
// console.log(user2[myVar]);

// video 81 => Nested Object And Advanced Training

// let user = {
//     name: "gemy",
//     age: 22,
//     skills: ["HTML", "CSS", "JS"],
//     available: false,
//     addresses: {
//         ksa: "Riyadh",
//         egypt: {
//             one: "Cairo",
//             two: "Giza",
//         },
//     },
//     checkAv: function() {
//         if (user.available === true) {
//             return 'Free For Work';
//         } else {
//             return 'Not Free';
//         }
//     },
// };

// console.log(user.name); //gemy
// console.log(user.age); // 22
// console.log(user.skills); //['HTML', 'CSS', 'JS']
// console.log(user.skills.join("-|-")); // HTML-|-CSS-|-JS
// console.log(user.skills[2]); // JS
// console.log(user.addresses.ksa); // Riyadh
// console.log(user.addresses.egypt.one); // Cairo
// console.log(user["addresses"].egypt.one); // Cairo
// console.log(user["addresses"]["egypt"]); // {one: "Cairo", two: "Giza"}
// console.log(user["addresses"]["egypt"]["one"]); // Cairo
// console.log(user.checkAv()) // Not Free

// video 82 => Create Object With New Keyword

// let user = new Object(); // or let user = {};
// console.log(user);

// user.age = 38;
// user["country"] = "Egypt";
// user.sayHello = function() {
//     return 'Hello';
// };

// console.log(user); // {age: 38, country: 'Egypt', sayHello: ƒ}
// console.log(user.age); // 38
// console.log(user.country); // Egypt
// console.log(user.sayHello()); // Hello

// video 83 => This Keyword

// console.log(this === window); // true

// document.getElementById("cl").onclick = function() {
//     console.log(this); // <button id="cl">click</button>
// }

// let user = {
//     age: 22,
//     ageInDays: function() {
//         return this.age * 365;
//     },
// };
// console.log(user.age); //22
// console.log(user.ageInDays()); //8030


// video 84 => Create Object With Create Method

// const person = {
//     greet: function() {
//         console.log("Hello!");
//     }
// };

// const newPerson = Object.create(person, {
//     name: { value: "John", writable: true, enumerable: true },
//     age: { value: 30, writable: true, enumerable: true }
// });

// console.log(newPerson.name); // يطبع "John"
// console.log(newPerson.age); // يطبع 30
// newPerson.greet(); // يطبع "Hello!"

// video 85 => Create Object With Assign Method

// const person = {
//     name: "John",
//     age: 30
// };

// const address = {
//     city: "New York",
//     country: "USA"
// };

// // استخدام Object.assign لدمج الكائنين
// const newPerson = Object.assign({}, person, address);

// console.log(newPerson);
// // يطبع: { name: 'John', age: 30, city: 'New York', country: 'USA' }

// example 2

// const person2 = {
//     name: "John",
//     age: 30
// };

// const updatedPerson = Object.assign(person2, { age: 31, city: "New York" });

// console.log(updatedPerson);
// // يطبع: { name: 'John', age: 31, city: 'New York' }
