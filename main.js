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