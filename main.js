
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


// practice 

let mix = "hsd4hd3";

let mixnum = mix.split("").filter(function (ele) {
    return !isNaN(parseInt(ele)) ? ele :""; 
}).map(function (ele) {
    return ele * ele
        ;
})
    .join("");

console.log(mixnum);

//  Higher Order Functions - Reduce

let number0 = [2, 5, 7, 9, 10];

let add = number0.reduce(function (acc, current) {
    return acc + current;
}, 10);

console.log(add);


// Higher Order Functions - ForEach And Practice

let list = document.querySelectorAll("ul li");

list.forEach(function (ele) {
    ele.onclick = function () {
        list.forEach(function () {
            ele.classList.remove("active");
        })
        this.classList.add("active");
    }
})

//  Object - Introduction

let footballer = {
    // properties
    name1: "Hazem",
    age1: 24,
    // methods
    sayinfo: function () {
        return `hallo ${this.name1} your age is ${this.age1}`
    }
};

console.log(footballer.name1);
console.log(footballer.age1);
console.log(footballer.sayinfo());


//  Dot Notation vs Bracket Notation

let varibale = "age";

let work = {
    name_worker: "Mohamed",
    "country of": "Egypt",
    age: 34,
    workinfo: function () {
        return `Hello ${this.name_worker} Your country is ${this["country of"]}`
    },
};

console.log(work.name_worker);
console.log(work["country of"]);
console.log(work.workinfo());
console.log(work[varibale]);

// Nested Object And Advanced Trainings

let remote_work = {
    name: "Hazem",
    age: 24,
    skills: ["html", "css", "JS"],
    addresses: {
        Ksa: "Riyadh",
        Egypt: {
            addresse_one: "cairo",
            addresse_two: "Alexandria",
        }
    },
    Avalibale: true,
    cheakAV: function () {
        if (this.Avalibale === true) {
            return `You Avalibale to Work today ${this.name}`
        } else {
            return `YOU not avalibale to work`
        }
    },
};

console.log(remote_work.name);
console.log(remote_work.age);
console.log(remote_work.skills);
console.log(remote_work.addresses.Egypt.addresse_two);
console.log(remote_work.cheakAV());

// Create Object With New Keyword

let admin =  new Object ({
    name: "Hazem"
});
console.log(admin.name);
admin.name = "Adel";
admin.age = 19;
admin.cheakage = function () {
    if (this.age >= 20) {
        return `your age is ${this.age} and you big enough to join`
    } else {
        return `You are not big enough to join`
    }
};
console.log(admin.name);
console.log(admin.age);
console.log(admin.cheakage());

// Create Object With Create Method

let score = {
    name_sport: "Zamalek",
    score_num: 200,
    multi_score: function () {
        return this.score_num * 2;
    }
};

console.log(score.multi_score());

let new_score = Object.create(score); // important 

new_score.score_num = 500;

console.log(new_score);
console.log(new_score.multi_score());
console.log(new_score.name_sport);

// Create Object With Assign Method

let newObj = Object.assign(score, remote_work, footballer, { football: 55 } , {club: "ahly"});

console.log(newObj);


//  What Is DOM And Select Elements

let dom_class = document.getElementsByClassName("form_dom");

console.log(dom_class);

let dom_id = document.getElementById("js");

console.log(dom_id);

let dom_query = document.querySelector("#js");

console.log(dom_query);

let dom_queryall = document.querySelectorAll(".form_form");

console.log(dom_queryall);

let tagByname = document.getElementsByTagName("h1");

console.log(tagByname[2]);

let title = document.title;

console.log(title);

// Get Set Elements Content And Attributes

let html = document.querySelector(".try");

console.log(html.innerHTML);
console.log(html.textContent);

// - Destructuring Arrays Part 1

let first = 3;
let sec = 5; 
let third = 7;
let fourth = 2;


let people = ["Hazem", "Adel", "Gaber", "Zaki"];

[first, sec, third, fourth, fifth = "mohamed"] = people;

console.log(first);
console.log(sec);
console.log(third);
console.log(fourth);
console.log(fifth);


// Destructuring Arrays Part 2

let tv = ["samsunge", "dell", "drake", ["LG", "Hp", ["lenovo", "sony"]]];


let [, , fir, [, seco, [, thir]]] = tv;

console.log(fir, seco, thir);

//  Destructuring Arrays Part 3 - Swap Variables

let book = "video"; 
let video = "book"; 

// the normal way

// let box = book;

// book = video;

// video = box;


// in destrucuring

[book, video] = [video, book];

console.log(book); 
console.log(video); 


// Destructuring Objects Part 1 and Destructuring Objects Part 2

let information = {
    thename: "hazem",
    theage: 24,
    thecountry: "Egypt",
    thejop: "IT",
    "skills years": 34,
    children: {
        child_one: "Ahmed",
        child_two: "Amer"
    },
    color_info: "balck"
};

let { thename: the_n, thecountry, thejop: jo, children:{child_two:am } , color_info = red  } = information;

console.log(thecountry);
console.log(jo);
console.log(information.theage);
console.log(information["skills years"]);
console.log(the_n);
console.log(am);
console.log(color_info);

// - Destructuring Function Parameters

let year = {
    days: 100,
    weeks: 56,
    years: {
        even: 23,
        odd: 32,
    },
};


show_info(year);

function  show_info({ days: d , weeks: w , years: { even: n } }) {
    console.log(`your days is ${d} and your weeks is ${w} and your years is ${n}`)
}


// Set Data Types And Methods

let Data = [2, 3, 4, 4, 5, 6, 6, 7 ,"hazem"];

let uniqedata = new Set(Data);

console.log(uniqedata);

console.log(uniqedata.add(20));

uniqedata.delete(4);

console.log(uniqedata.has("hazem"));

uniqedata.clear();

console.log(uniqedata);


// WeakSet And Garbage Collector

let dataone = [22, 22, 44, 5, 5, 70, 78 ];

let datainfo = new WeakSet([{ Aa: "alo", Bb: "lo"}]);

console.log(datainfo);

// let key = datainfo.keys()

// console.log(key.next().value);
// console.log(key.next().value);
// console.log(key.next().value);
// console.log(key.next().value);
// console.log(key.next().value);
// console.log(key.next());


// Map Methods

let map = new Map();

map.set("name", "hazem");
map.set("number", 30);
map.set("country", "Egypt");

console.log(map.get("name"));
console.log(map.get("number"));
console.log(map.get("country"));

console.log(map);

console.log(map.size);

console.log(map.delete("name"));

console.log(map.size);

console.log(map.has("country"));

map.clear();

console.log(map.size);

//  Array.from Method

let arr = Array.from("12344" ,  n => +n + +n);

console.log(arr);

let setarray = [2, 4, 5, 5, 55, 6, 7, 8, 8, 9];

let set = new Set(setarray);

console.log(Array.from(set));

//  Array.copyWithin Method

let arraycopy = [23, 45, 13, 55, 3, 2, "a", "z"];

arraycopy.copyWithin(1, -3, -2);

arraycopy.copyWithin(0, -1);

arraycopy.copyWithin(3 , -2 , -1);

console.log(arraycopy);

// Array.some Method

let somenum = [2, 3, 5, 6, 8, 9, 0, 23, 32];

let sometry = 30;

let somen = somenum.some(function (e) {
    return e > this;
},sometry)

console.log(somen);

function cheaknum(num , value) {
    return num.some(function (e) {
        return e === value;
    })
}

console.log(cheaknum(somenum, 4));


// Spread Syntax And Use Cases

let nums = [12, 3, 4, 5, 6];

let nums2 = [34, 56, 12, 20];

console.log([...nums, ...nums2]);

let obj = {
    spread: 1, 
    any: 2
}
let objone = {
    spreadd: 3, 
    anyy: 4
}

console.log({ ...obj, ...objone, a: 77});


let mypeople = ["hazem", "adel", "gaber", "zaki"];

let newpeople = ["mohamed", "aboalfa"];

mypeople.push(...newpeople);

console.log(mypeople);

// Get Array From Object

let tyrone = Object.keys(objone); // Or (.Values)

console.log(tyrone);

// Map And Set Challenge

let n1 = [10, 30, 10, 20]; // 70

let n2 = [30, 20, 10]; // 60 

console.log("####") // 210

console.log(Math.max(...n1) * [...n1, ...n2].length); //Done


// - Regular Expressions - Modifiers

let string1 = "Hi my name is Hazem and my Age is 25 And hazem is strong";


let rugexpre = /Hazem/ig;

console.log(string1.match(rugexpre));


//  Regular Expressions - Ranges Part 1

let web = 'com net org code io';
console.log(web.match(/(com|org|io)/g));


let numsone = '135786859';

console.log(numsone.match(/[^0-5]/g));

let numstwo = '1@5$7%8#68*5!9';

console.log(numstwo.match(/[^0-9]/g));

let string2 = 'Haz47384em Ad656el G343457236aber';   

console.log(string2.match(/g[0-9]+aber/ig));

//  Regular Expressions - Character Classes Part 1

let webs = ' hadel6464@gmail.com 8@4.org k@.com h@@@h..com h@g.net 65372 ';

console.log(webs.match(/\w+@\w+.(com|net)/g));

console.log(webs.match(/\d/g));


//  - Regular Expressions - Character Classes Part 2

let chartclass = '1hazem hazem2 gazem7 Hazem99 20hazemm Hazem';

let regex = /\bhazem|hazem\b/ig;

console.log(chartclass.match(regex));

console.log(regex.test(chartclass));


// Regular Expressions - Quantifiers Part 1

let sites = ' hazemadel@gmail.com  adel7686@yahoo.net usa@newyork.us google@hash.org';

let sitestry = /\w+@\w+.\w+/ig;

console.log(sites.match(sitestry));

let numregex = `02210  00 0120 0233 43 230 010`

let numsreg = /0\d*0/gi;

console.log(numregex.match(numsreg));

let sitestwo = ' https://www.google.com   http://youtube.org  web.net'

let sitesreg = /(https?:\/\/\w+.)?\w+(.\w+)/ig;

console.log(sitestwo.match(sitesreg));


// Regular Expressions - Quantifiers Part 2

let numreg = 'h123h h5345h h3453234h h2345532343h h12h 1hgasg1';

console.log(numreg.match(/h\d{3}h/ig));
console.log(numreg.match(/h\d{3,5}h/ig));
console.log(numreg.match(/h\d{3,}h/ig));
console.log(numreg.match(/h\d{0,2}h/ig));
console.log(numreg.match(/1\w{0,6}1/ig));

// revison^^ 

let array = [12, 34, 45, 67, 89, 9, 5, 34];

let arrayfun = array.filter(function (ele) {
    return ele < 10;
})

console.log(arrayfun);


let string = ["Hazem", "Hamed", "Adel", "Ahmed", "Adham", "Hamza"];

let [fi, se, thi, , ,] = string

console.log(string);
console.log(fi);
console.log(thi);


let stringfun = string.filter(function (el) {
    return el[0] === "H";
})

console.log(stringfun);


let objfun = {
    nameof: "Hazem", 
    ageof: 35, 
    countryof: "Egypt",
    Avalibaleof: true,
    "Gender of": "male",
    cheakwo: function () {
        if (this.ageof < 34) {
            return this.Avalibaleof;
        } else {
            return `Sorry ${this.nameof} You Are So Younge To Work`
        }
    }
}
console.log(objfun.cheakwo());
console.log(objfun.ageof);
console.log(objfun["Gender of"]);
console.log(Object.values(objfun));

let numsspread = [13, 4, 6, 7, 8, 5, 3];

let numsspread2 = [3, 4, 67, 8, 84, 2, 2];

numsspread.push(...numsspread2);

console.log(numsspread);

let mapre = new Map();

console.log(mapre.set("name", "value"));
console.log(mapre.set("age", 50));
console.log(mapre.set("city", "Alexandria"));


console.log(mapre.get("city"));
console.log(mapre.has("age"));
console.log(mapre.delete("name"));
console.log(mapre.size);
mapre.clear();
console.log(mapre);

let nummap = [1, 3, 5, 7, 9];

let numsmap = nummap.map( function (element) {
    return element * element; 
})
console.log(numsmap);


for (let i = 1; i <= 10; i++){
    console.log(i);
}


// Regular Expressions - Quantifiers Part 3

let reg = 'Hi my name is hazem'

console.log(reg.match(/azem$/ig));

console.log(reg.match(/^hi/ig));

let regx = ' 1hazemz 3adelz 8gaber 9zakiz';

console.log(regx.match(/\d\w{0,5}(?=z)/ig));
console.log(regx.match(/\d\w{0,9}(?!z)/ig));

// - Regular Expressions - Replace With Pattern

let replace = 'Hi my name is $ and my age is 24 years old ';

console.log(replace.replace("$", "Hazem"));

console.log(replace.replace(/ld/ig, "hahha"));


/*
Regular Expression
- Challenge
*/

let url1 = 'elzero.eg';
let url2 = 'http://elzero.net';
let url3 = 'https://elzero.com';
let url4 = 'https://www.elzero.io';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re = /(https?)?(:\/\/\w+.)?\w+.(net|org|com|io|eg)(:\d+\/\w+.\w+\?\w+=\d+&\w+=\w+)?/ig;

console.log(url1.match(re));
console.log(url2.match(re));
console.log(url3.match(re));
console.log(url4.match(re));
console.log(url5.match(re));


// (OOP) Constructor Function Introduction !

function Car(color, price ,model) {
    this.co = color; 
    this.pri = price + 30000; 
    this.mo = model + 1; 
}


let newcar = new Car("red", 30000, 2010);
let newcar1 = new Car("black", 40000, 2015);
let newcar2 = new Car("blue", 50000, 2020);

console.log(newcar.co, newcar.mo , newcar.pri);
console.log(newcar1.co, newcar1.mo , newcar1.pri);
console.log(newcar2.co, newcar2.mo , newcar2.pri);


// (OOP) Constructor Function New Syntax ^^

class User {
    constructor(name , salary , year) {
        this.n = name;
        this.sal = salary + 2000;
        this.y = year;
    }
}

let user1 = new User("Hazem" ,3000,2001);
let user2 = new User("Mostafa" ,4000,2002);
let user3 = new User("Mohamed", 5000, 2000);

console.log(user2 instanceof User);

console.log(user2.n, user2.sal, user2.y);

//  Deal With Properties And Methods

class School {
    constructor(teacher , students ,numofincomethisyear ,year) {
        this.te = teacher; 
        this.stu = students || "unkown";
        this.noity = numofincomethisyear >= 1000000 ? numofincomethisyear + 200000 : numofincomethisyear; 
        this.y = year;
    }
    stmsg() {
        return ` Hi Teacher ${this.te} Your Student is ${this.stu} And The Year Is ${this.y} And Your Income This Year Is ${this.noity} `
    }
}

let schoolinfo = new School("Ahmed", "Ahmed", 1500000, 2024 );


console.log(schoolinfo.stmsg());


console.log(schoolinfo.noity);

console.log(schoolinfo instanceof School);

// Update Properties And Built In Constructors

class info1 {
    constructor(name , age , country) {
        this.n = name;
        this.g = age; 
        this.c = country;
    }
    updatename(newname) {
        this.n = newname;
    }
    updateage(newage) {
        this.g = newage;
    }
    updatecountry(new_country) {
        this.c = new_country;
    }
}

let info2 = new info1("Hazem", 24, "Egypt");

console.log(info2.n)
console.log(info2.g)
console.log(info2.c)

info2.updatename("Adel");
info2.updateage(25);
info2.updatecountry("Usa");


console.log(info2.n)
console.log(info2.g)
console.log(info2.c)

console.log("#".repeat(30));

//  Class Static Properties And Methods

class team {
    static count = 0; 
    constructor(name , number , teamn ) {
        this.n = name; 
        this.num = number; 
        this.t = teamn;
        team.count ++; 
    }
    static tmgsplayers() {
        return `the numbers of members is ${this.count}`
    }
}

let teamone = new team("Mohamed", 22, "Zamalek");
let teamtow = new team("Hazem", 10, "Zamalek");
let teamthree = new team("Mostafa", 13, "Ahly");

console.log(teamone.n);

console.log(team.tmgsplayers());

console.log(team.count);

//  Class Inheritance

class company {
    static count = 0;
    constructor(Buildings , floors , Employees , manger_name) {
        this.b = Buildings;
        this.f = floors; 
        this.e = Employees;
        this.mn = manger_name;
        company.count++;
    }
    msgfrom_me() {
        return `Please Mister ${this.mn} keep your head open`
    }
        updatemangername(newmangername) {
        this.mn = newmangername;
    }
}

let newcompany = new company(12, 4, 30 ,"Hamza");

console.log(newcompany.b);
console.log(newcompany.msgfrom_me());
console.log(company.count);

class school extends company {
    constructor(Buildings, floors, Employees, manger_name, students) {
        super(Buildings, floors, Employees, manger_name)
        this.s = students; 
    }
}

let newschool = new school(20, 8, 50, "khaled", 200);

console.log(newschool.msgfrom_me());
console.log(newschool.s);
console.log(newschool.f);


class university extends school {
    constructor(Buildings,floors,Employees,manger_name,students,Doctors) {
        super(Buildings, floors, Employees, manger_name, students)
        this.d = Doctors;
    }
    msgfor_Doctors() {
        return `please ${this.d} keep your eyes on the students`
    }
}

let newuniversity = new university(40, 18, 100, "Engy", 1500, "Hazem");


console.log(newuniversity.msgfor_Doctors());
console.log(newuniversity.msgfrom_me());
console.log(newuniversity instanceof company);
console.log(newuniversity.mn);
newuniversity.updatemangername("Ahmed"); 
console.log(newuniversity.mn);
console.log(university.count);

// Fast revision 

class hazem {
    static count = 0;
    constructor(name, age, country) { 
        this.n = name || "unknown";
        this.g = age;
        this.c = country;
        hazem.count++;
    }
    uptadeg(age) {
        this.g = age;
    }
}

let newhazem = new hazem("hazem", 66, "Usa");


console.log(newhazem.g);

newhazem.uptadeg(24);

console.log(newhazem.g);

console.log(newhazem instanceof hazem);

console.log(hazem.count);


// Class Encapsulation

class customer {
    #id;
    constructor(name , country , id) {
        this.n = name; 
        this.c = country;
        this.#id = id;
    }
    getid() {
        return parseInt(this.#id) * 2;
    }
}

let newcustomer = new customer("Ahmed", "Egypt", "2324ji")

console.log(newcustomer.getid());

class shop extends customer {
    constructor(name, country, id, shopname) {
        super(name, country, id);
        this.sn = shopname;
    }
}

let newshop = new shop("gaber", "Ksa", "654rt", "mac"); 

console.log(newshop.getid());

console.log(newshop instanceof customer);


// Add To Prototype Chain And Extend Constructors Features

class Home {
    #owner_name;
    constructor(floor , doors , owner_name) {
        this.floor = floor; 
        this.doors = doors;
        this.#owner_name = owner_name;
    }
    getOname() {
        return `welcome ${this.#owner_name}`
    }
}

let newhome = new Home(2, 3, "Khaled");

console.log(newhome.getOname());

console.log(Home.prototype);
console.log(newhome);

Home.prototype.sayfloorsplusedoors = function () {
    return `the num of floors is ${this.floor} and num of doors is ${this.doors}`
}

console.log(newhome.sayfloorsplusedoors());

Object.prototype.hazem = "Hazem";

console.log(newhome.hazem);

console.log(newhome);

String.prototype.add_doots = function (_val) {
    return `.${this}.`
}

let namE = "Hamo";

console.log(namE.add_doots());

Array.prototype.sum =  function () {
    return this.reduce (function (acc ,current) {
        return acc + current;
    },0)
}

let numof_people = [3, 45, 5, 6, 7, 8, 54, 54, 5, 7];

console.log(numof_people.sum());

let numof_cars = [3, 5, 54, 7, 8, 54, 54, 5, 7];

console.log(numof_cars.sum());


//  Object Meta Data And Descriptor Part 1

let myobj = {
    a: 1,
    c: 2,
} 

console.log(myobj);

Object.defineProperty(myobj, "b", {
    writable: false,
    configurable: true,
    enumerable: true,
    value: 88,
});

myobj.b = 44;

console.log(myobj);

// Object Meta Data And Descriptor Part 2

let ownobj = {
    a: 44, 
    b: 88,
}

Object.defineProperties(ownobj, {
    c: {
        writable: true,
        value: 33,
    },
    d: {
        writable: true,
        value: 99,
    }, 
    e: {
        writable: true,
        value: 22,
    }
});

console.log(ownobj);
console.log(Object.getOwnPropertyDescriptor(ownobj, "e"));
console.log(Object.getOwnPropertyDescriptors(ownobj));

// try <?**>?

Object.defineProperty(shop, "name", {
    writable: false,
    enumerable: true ,
    value: "hazem",
    configurable: false,
});

shop.name = "Ahmed";

console.log(delete shop.name);
console.log(shop.name);

Object.prototype.big_age = 100; 

console.log(newhome.big_age);

shop.prototype.age = function () {
    return big_age * 2;
};

console.log(newshop.age());

Number.prototype.multi = function (_val) {
    return this * 3; 
}

let multinum = 10;

console.log(multinum.multi());

let namedot = "Hazem";

console.log(namedot.add_doots());

Boolean.prototype.convert_to_true = function() {
    return !this.valueOf();
};

let usa = false; 

console.log(usa);
console.log(usa.convert_to_true());

let nm = 434343;

console.log(Array.from(nm.toString()));


// - Date And Time Introduction

let newtime = new Date(); 

console.log(newtime);

console.log(Date.now());

let min = Date.now() / 60;

console.log(min);


//  Get Date And Time

let datenow = new Date();

let birthday = new Date ("dec 21 , 00");

let myage = datenow - birthday;

console.log(myage / 1000 / 60 / 60 / 24 / 365);

console.log(datenow.getTime());

console.log(datenow.getFullYear());

console.log(datenow.getMonth());

console.log(datenow.getDay());

// new function **^

Array.prototype.bigger_than_ten = function () {
    return this.filter(function (val) {
    return val > 10;
    })
};

let arrayone = [3, 4, 6, 7, 55, 7, 8, 5, 33, 100];

console.log(arrayone.bigger_than_ten());