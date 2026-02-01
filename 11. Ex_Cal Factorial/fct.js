// Using reduce function
function Factorial_using_reduce(val) {
    let arr = Array.from(Array(val+1).keys())
    let c = arr.slice(1,).reduce((a,b) =>{
        return a*b
    })
    return c
}

// Using for loop
function Factorial_using_forloop(val){
    let fac = 1;
    for (let index = 1; index <= val; index++) {
        fac = fac * index
    }
    return fac
}

// let userinput = parseInt(prompt("Enter the Value"));
let userinput = 4;

console.log("This is a page to help you for calculate Factorial\t")

ans_r = Factorial_using_reduce(userinput)
ans_f = Factorial_using_forloop(userinput)
console.log("Using reduce : ", userinput, " = ", ans_r)
console.log("Using forlopp : ", userinput, " = ", ans_f)