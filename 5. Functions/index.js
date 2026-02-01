function nice(name) {
    console.log("Hey " + name + " You are nice.")
}

nice("Dhru")
nice("DhruP")

function sum(a, b, c = 5) {
    return a + b + c;
}

// ans0 = sum(3) // b is not defined
// console.log(ans0) // it will return NaN Not a Number

ans1 = sum(3, 5)
console.log(ans1)

ans2 = sum(3, 5, 4) // c value passed
console.log(ans2)

// arrow function
// fun1 is a variable also (function in variable)

const fun1 = (x) =>{
    console.log("I am an arrow fucntion", x)
}

fun1(18);
fun1(81);
