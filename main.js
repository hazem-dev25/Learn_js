console.log("hallo");
console.table(["hazem", "adel", "gaber"]);
console.log(12);
// Data Types And Typeof Operator
console.log(typeof "hazem"); 
console.log(typeof 100);
console.log(typeof ["hazem" , "adel", "gaber"]);
console.log(typeof {name: "hazem" , agee: 24 , countrry: "Egypt"});
console.log(typeof true);
console.log(typeof undefined);
//  Variables Introduction
var user = "hazem";
var agee = 24 ;
var countrry = 'Egypt';
console.log(user);
console.log(agee);
console.log(countrry);
// String Syntax And Character Escape Sequences
console.log("hazem adel \"gaber\"");
console.log("HAZEM \nADEL \nGABER");
// Arithmetic Operators
console.log(1 + 3);
console.log(2 - 5);
console.log(3 * 6);
console.log(4 ** 3);
console.log(5 / 6);
console.log(20 % 5)
// increment and decrement
num = 1;
console.log(num++)

num = 4;
console.log(++num)
// Unary Plus And Negation Operators 
console.log(+133);
console.log(+"200");
console.log(+12.9);
console.log(+null);
console.log(+"Hazem");
console.log(+true);

console.log(-"-200");
console.log(-133);
console.log(-"200");
console.log(-12.8);
console.log(-null);
console.log(-"Hazem");
console.log(-true);
// Assignment Operators
let a = 4;
a = a + 40;
a += 100; 
console.log(a);
// challenge one
let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(+e * -d);  // 2000
console.log(-d + +e * 2 + ++f + ++g); // 173
// Number Methods
console.log(200..toString());
console.log(3.45645647.toFixed(1));
console.log(parseInt("100 hazem"));
console.log(parseFloat("20.2323 adel"));
console.log(Number.isInteger(30))
console.log(Number.isNaN("hazem" - 20));
console.log(Number.isNaN(20 + 40));
// Math Object
console.log(Math.round(8.8));
console.log(Math.round(8.4));

console.log(Math.ceil(5.2));
console.log(Math.floor(5.2));

console.log(Math.min(12 , 333, 343 ,54465, 5464,55) );
console.log(Math.max(12, 333, 343, 54465, 5464, 55));

console.log(Math.random());
console.log(Math.trunc(33.786));
//  Number Challenge
let c = 1_00;
let x = 2_00.5;
let z = 1e2;
let v = 2.4;

// find the smallest number and return intger 
console.log(Math.trunc(Math.min(c, x, z, v))); // 2

// use c + v to git right output 10000
console.log(Math.round(c ** Math.trunc(v)));

// Get intger "2" from v varibale with four methods
console.log(Math.trunc(v));
console.log(Math.floor(v));
console.log(Math.round(v));
console.log(parseInt(v));

// use this varibales x and v to git this value
console.log( (Math.trunc(x) / ((Math.floor(v)+true))).toFixed(2) ); // 66.67 => string
console.log( +(Math.trunc(x) / ((Math.floor(v)+true))).toFixed(0) ); // 67 => number

// String Methods Part 1
let myname = "  Hazem  ";

console.log(myname[2]);
console.log(myname.charAt(3));
console.log(myname.length);
console.log(myname.toUpperCase());
console.log(myname.toLowerCase());
console.log(myname.trim());
console.log(myname.trim().charAt(2).toLowerCase());

//  String Methods Part 2
let t = "Hazem Adel Gaber";

console.log(t.indexOf("Adel", 7));
console.log(t.lastIndexOf("e"));

console.log(t.slice(0, 5));
console.log(t.repeat(4));

console.log(t.split(" ", 2));

// String Methods Part 3
console.log(t.substr(0, 5));
console.log(t.substr(-5, 2));

console.log(t.includes("Gaber"));
console.log(t.startsWith("A", 6));
console.log(t.endsWith("em", 5));

//  String Challenge
let tt = "Hazem adel Gaber";

// include this methode in your solution (slice , chartAt)
console.log(tt.charAt(6).toUpperCase() + tt.slice(7, 10)); // Adel

// 9 e 
console.log(tt.charAt(15).toUpperCase().repeat(9)); // EEEEEEEEE

// return Array 
console.log(tt.split(" " , 1));

// Comparison Operators
console.log(10 == "10");
console.log(10 != "10");

console.log(10 === "10");
console.log(10 !== "10");

console.log(10 > 20);
console.log(10 >= 10);

// Logical Operators 
console.log(!(10 == "10"));

console.log(10 > 20 && 20 == 20 && "10" === "10");

console.log(10 > 20 || 20 == 20 || "10" === "10");

// If Conditions And Nested If Condition
let price = 1000;
let discount = false;
let discountAmount = 200;
let country = "Egypt";
let student = true;

if (discount === true ) {
    console.log("welcome to our store");
    price -= discountAmount;
} else if (country === "Egypt" ) {
    console.log("Welcome my Egyption friend");
    if (student === true) {
        price -= 600;
    } else {
        price -= 400;
    }
} else if (country === "ksa") {
    console.log("Welcome to our store");
    price += 1000;
} else {
    console.log(price);
}

console.log(price);

//  Conditional Ternary Operator
let name = "mona";
let gender = "female";
let age = 60;

gender === "Male" ? console.log("hello bro") : gender === "female" ? console.log("welcome my lady") : console.log("unknowen gender");

age === 40 ? console.log("your age is great") : age > 40 ? console.log("Soryy your age is old to us") : age < 40 && age < 20 ? console.log("your age is ok") : console.log("Enter your age");

// Nullish Coalescing Operator And Logical Or
let s3r = 0;

console.log(`the price is ${s3r || 100} `);

//  Switch Statement
let day = 9;

switch (day) {

    case 0:
        console.log("suterday");
        break;
    
    case 1:
        console.log("sunday");
        break;
    
    case 2:
    case 3:
        console.log("monday");
        break;
    
    default:
        console.log("day off");
}

// switch challenge convert if condition to switch statement

let jop = "IT";
let salary = 0;

switch (jop) {
    
    case "Manager":
        salary = 8000;
        console.log(`your salary is ${salary}`);
        break;
    
    case "IT": 
    case "Support":
        salary = 6000;
        console.log(`your salary is ${salary}`);
        break;
    
    case "Developer": 
    case "Designer":
        salary = 7000;
        console.log(`your salary is ${salary}`);
        break;
    
    default:
        salary = 4000;
        console.log(`your salary is ${salary}`);

}

// Array Big Introduction
let myFamily = ["mother", "father", "sister", "brother" , ["Hazem", "Adel"]];

console.log(` Hi My ${myFamily[1]}`);
console.log(` Hi My ${myFamily[3][0]}`);
console.log(` Hi My ${myFamily[4][0][1]}`);

console.log(myFamily);
myFamily[0] = "omy";
console.log(myFamily);

console.log(Array.isArray(myFamily));

// Using Length With Array
let names = ["Hazem", "Adel", "Mohamed", "Zaki" , 89 , "30" , 1000 , 400.34 , 97 ];

console.log(names.length);

names[names.length -1] = "Gamal";
console.log(names);

// Add And Remove From Array
console.log(names);

names.unshift("Adham", "Mostafa");

console.log(names);

names.push("Khaled", "Hamza");

console.log(names);

names.shift();

console.log(names);

names.pop();

console.log(names);

//  Searching Array
console.log(names.indexOf("Khaled"));
console.log(names.indexOf("Khaled", 6));

console.log(names.lastIndexOf("Mohamed"));
console.log(names.lastIndexOf("Mohamed", -4));

console.log(names.includes("Zaki"));

// Sorting Arrays
console.log(names);

console.log(names.sort());

console.log(names.reverse());

//  Slicing Array
console.log(names);

console.log(names.slice(3, 6));
console.log(names.slice(-6, -1));

names.splice(1, 1, "Tamer");

console.log(names);

// Joining Arrays
let nameof_friends = ["Tariq", "Hossam", "Hatem", "Alaa", "Zakaria", "Mahmoud"];
let nameof_oldfriends = ["Sayed", "Mamdoh", "Yassin", "Ziad", "AdbelElrahman"];
let nameof_newfriends = ["Ahmed", "Kamal"];

let All_frinds = (nameof_friends.concat(nameof_oldfriends, nameof_newfriends, [1, 2]));

console.log(All_frinds);

console.log(All_frinds.join(" | ").toUpperCase());

// Array Challenge
let zero = 0;

let counter = 3;

let my = ["ahmed", "mazero", "elham", "osama", "gamal", "ameer"];

console.log(my.slice(zero, ++counter).reverse()); // ["osama" ,"elham" ,  "mazero", "ahmed"];

console.log(my.slice(++zero, counter).reverse()); // ["elham" , "mazero"];

console.log(my[zero] = "Elzero"); // "Elzero"

console.log(my[zero].slice(counter).toUpperCase()); // RO

//  Loop - For And Concept Of Loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  Looping On Sequences
let friends = [22, 55, "tamer", 56, "hossam", 778, "salah", "osama", "alaa", 7878];

let real_friend = []; 

for (let i = 0; i < friends.length; i++) {
    if (typeof friends[i] === 'string') {
    real_friend.push(friends[i]);
    }
}
console.log(real_friend);


let animals = ["lion", 232, "cat", 2323, "dog", 3445, "rat", 565, "rabbit", 332];

let numof_animlas = [];

for (let i = 0; i < animals.length; i++) {
    if (typeof animals[i] === 'number') {
        numof_animlas.push(animals[i]);
    }
}
console.log(numof_animlas);

// Nested Loops And Trainings
let cars = ["bmw", "lada", "ford", "fiat", "kia"];

let colors = ["black", "white", "red"];

let yearOf_model = ["2020", "2021", "2023"];

for (let i = 0; i < cars.length; i++) {
    console.log(`#`.repeat(15));
    console.log(cars[i]);
    console.log(`#`.repeat(15));
    console.log(`colors : `);
    for (let j = 0; j < colors.length; j++) {
        console.log(`~ ${colors[j]}`)
    }
        console.log(`yearOf_model`)
    for (let k = 0; k < yearOf_model.length; k++) {
        console.log(`~ ${yearOf_model[k]}`);
    }
}
//  Loop Control - Break, Continue, Label
let shirts = ["polo", "h&m", 12, 54, "buma", 100, 30, "active"];

let color = ["red", "white", "balck", "green"];


for (let i = 0; i < shirts.length; i++) {
    if (shirts[i] === "buma") {
        break;
    }
    console.log(shirts[i]);
}

for (let i = 0; i < shirts.length; i++) {
    if (typeof shirts[i] === "number") {
        continue;
    }
    console.log(shirts[i]);
}

mainlabel: for (let i = 0; i < shirts.length; i++) {
    console.log(shirts[i]);

    nestedlabel: for (let j = 0; j < shirts.length; j++) {
        if (color[j] === "green") {
            break mainlabel;
        }
        console.log(`~ ${color[j]}`);
    } 
}

// Practice - Add Products To Page
let laptops = ["Dell", "Hp", " Mac", "Lenovo", "Samsung"];

let showLaptops = 2;

document.write(`<h1>showLaptops ${showLaptops} </h1>`);

for (let i = 0; i < showLaptops; i++) {
    document.write(`<div>`);
    document.write(`<h3> ${laptops[i]} </h3>`);
    for (let j = 0; j < color.length; j++) {
        document.write(`<p>~ ${color[j]} </P>`);
    }
    document.write(`</div>`);
}

//  Loop - While 

let city = ["Alexandria", "cairo", "paris", "london", "Brlin" ,"liverpool"];

let i = 0;
while (i < city.length ) {
    console.log(city[i]);
    i++;
}

//  Loop - Do While
do {
    console.log(i);
    i++;
} while (false);


// Loop - Challenge
let Admins = ["Ahmed", "Sameh", "Osman",  "Stop", "samira"];
let Employees = ["Ather", "Adam", "Osama", "Omar", "Said", "Soaad", "Androw", "Alaa", "sara", "Salah" ];

let myadmins = 2; 

document.write(`~ <h2> The number of admins we have is ${myadmins} </h2>`);

for (let k = 0; k < myadmins; k++) {
    document.write(Admins[k]); 
}
for (let i = 0; i < Admins.length; i++) {
    if (Admins[i] === "Stop") break;
    document.write(`<h2> The name of admins is : ${Admins[i]} </h2>`);
    for (let j = 0; j < Employees.length; j++) {
        if (Admins[i][0].toLowerCase() === Employees[j][0].toLowerCase()) {
            document.write(`~~ ${Employees[j]} <br>`);
        }
    }
    document.write("<hr>");
}


// Function Intro And Basic Usage

function sayno(username) {
    console.log(`Your name is : ${username}`);
}

sayno("Hatem");

// Function Advanced Examples

function Getyear (start , end ,not_Enclude) {
    for (let i = start; i <= end; i++) {
        if (i === not_Enclude) continue;
        console.log(i);
    }
}

Getyear (2005 ,2010 ,2007);

//  Function Return And Use Cases

function range_num(num1 , num2) {
    return num1 * num2;
}

let result = range_num(30, 80);

console.log(result);

//  Function Default Parameters

function your_info(name = "unknown" , age  = "unknown") {
    return `Your name is : ${name} , And your age is : ${age} `;
}

let info = your_info("Hazem");

console.log(info);

//  Function Rest Parameters

function calc(...numbers ) {
    let result = 0;
    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }
    return `the result is : ${result}`
}

console.log(calc(10, 30, 60, 79, 100, 60 , 100, 88));

// small test 

function showinfo(name, age, country, ...rate) {
    console.log(name, age, country);
    let num_rate = 0;
    for (let i = 0; i < rate.length; i++) {
        num_rate += rate[i];
    }
    return `your rate is ${num_rate}`
}

console.log(showinfo("hazem" , 32, "egypt", 100, 100, 100, 100, 100, 101, 305));

//  Random Arguments Function Challenge

function infoo(a, b, c) {
    let name , age , bool;
    if (typeof a === "string") name = a;
    else if (typeof b === "string") name = b;
    else if (typeof c === "string") name = c;

    if (typeof a === "number") age = a;
    else if (typeof b === "number") age = b;
    else if (typeof c === "number") age = c;

    if (typeof a === "boolean") bool = a;
    else if (typeof b === "boolean") bool = b;
    else if (typeof c === "boolean") bool = c;

    typeof name === "string" && typeof age === "number" && typeof bool === "boolean" ?
        console.log(`Hi your name is ${name} and your age is ${age} so you can drive`) :
        console.log("you cant drive")
    return;
}

console.log(infoo("hazem", true, 24));
console.log(infoo(true, "tamer", 33));
console.log(infoo("hazem", 55, true));

// Anonymous Function And Practice

let calculator = function (num_1, num_2) {
    return num_1 * num_2;
}

console.log(calculator(7, 10));

// Return Nested Function

function animals_name(Lnames, Snames) {
    let massege = `Hi`; 
    function msg() {
        return `${massege} : ${allnames()} `;
        function allnames() {
            return `${Lnames} and ${Snames}`;
        }
    }
    return msg();
}

console.log(animals_name("lion", "ant"));


//  Arrow Function Syntax

let print =  num => num;

console.log(print(10));


let club = real_madrid => real_madrid;

console.log(club("Cr7"));

let family = (father_name, mother_name) => ` MY father name is : "${father_name}" and my mother is : "${mother_name}"`;

console.log(family("Adel", "Nelly"));

// Scope - Global And Local

let n = 20;
let m = 50;

function show() {
    let n = 100;
    let m = 200;
    console.log(` function scope ${n}`)
    console.log(` function scope ${m}`)
}

show();

console.log(n);
console.log(m);

//  Scope - Lexical (Static)

function parent() {
    let a = 30; 
    function child() {
        console.log(`From child ${a} `);
    }
    child()
    function grand() {
        console.log(` From grand ${a}`);
    }
    grand()
}

parent()

// Arrow Function Challenge

let namee =  (...student_names)  => ` String  [${student_names.join("],[")}] => Done !` ; 

console.log(namee("hazem", "adel", "gaber"));


// Higher Order Functions - Map

let numbers = [1, 2, 3, 4, 5];

let add_num = function(element) {
    return element + element;
}
let result_num = numbers.map(add_num);

console.log(result_num);

let prand = ["dell", "hp", "mac", "lenovo", "samsunge"];

let new_parnd = prand.map(function (prand) {
    return`the prand is ${prand} | ${prand} `;
}) 

console.log(new_parnd);

// Example

let b = "h234a56z35e76m";

let new_b = b.split("").map(function (ele) {
    return isNaN(parseInt(ele)) ? ele :"" ;
})
    .join("");

console.log(new_b);


//  Higher Order Functions - Filter

let workers = ["Hazem", "Adel", "Hamza", "Hamada", "Tamer", "To2a"];

let filter_workers = workers.filter(function (ele) {
    return ele.startsWith("H");
})

console.log(filter_workers);

let num0 = [34, 35, 67, 98, 10, 30, 5, 100];

let even_num = num0.filter(function (ele) {
    return ele % 2 === 0;
})

console.log(even_num);


// test

let mix = "hsd4hd3";

let mixnum = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele)) ? ele :""; 
}).map(function (ele) {
    return ele * ele
        ;
})
    .join("");

console.log(mixnum);