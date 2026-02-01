console.log("Hey this is js")

var a = 9;
a = a + 1;
var b = 7;
var ab = "DHRU";

console.log("a + b + 1 =", a + b + 1)
console.log(typeof a, typeof ab)
{
    console.log("This is a block of code");
    let a = 11;
    console.log("a is", a);
}

console.log("This is a out of the block code")
console.log("a is", a)

// const a1 = 6;
// a1 = a1 + 10; // Not Allowed because a1 in constant variable.


// DATA TYPES

// PRIMITIVE -> null Number BigInt Boolean String Symbol undefined
let x = 82;
let y = "DP";
let z = 88.16;
const win = true;
let q = undefined;
let l = null

console.log(x, y, z, win, q, l)
console.log(typeof x, typeof y, typeof z, typeof win, typeof q, typeof l)


// OBJECTIVE ->
const my = {
    name:"dp", 
    age:19, 
    color:"off-white",
    "is handsome":"ture"
}; 

console.log(my)
my.salary = 100000
console.log(my)
my.salary = 500000
console.log(my)