// arithmatic  operators :  + - / * % ++ --  ** -> exponentiation (power)
// assigment   operators :  = += -= *= /= %= **=
// comparesion operators :  == != === equal value and type !== > < >= <= ?
// logical     operators :  && logical and,  || logical or, ! logical not.

let age = 45;
if (age >= 18) {
  console.log("You can drive");
} else if (age == 0) {
  console.log("Are You Even Kidding?");
} else {
  console.log("You cannot drive untill you reach 18");
}

let a = 1;
let b = 3;
// var = conditon ? if : else
c = a > b ? a - b : a + b;
console.log(c);
