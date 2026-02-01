// Hoisting
console.log(aa); // Retrun undefine because var aa is delcleard at top of stack not var aa =6
// Function also do that thing but not const function
hello("DHRU")

function hello(name){
    console.log(`NAME IS ${name}`);
    return name
}
// let and const not support hoisting

async function sleep() {
    return new Promise((reslove, reject)=>{
        reslove(18);
    }, 1000);
}

function sum(a, b, c){
    return a+b+c
}

// This will Thorw error
// let a = await sleep()
// let b = await sleep()

// IIFA
(async function main() {
    let a = await sleep()
    console.log(a);
    let b = await sleep()
    console.log(b);

    // let x, y  = [1, 2, 3, 4]
    // console.log(x, y) // error

    // Array Desconstruction
    let [x, y, ...rest] = [1, 2, 3, 4, 5, 6]
    console.log(x, y, rest);
    
    let obj = {
        a1:1,
        b2:2,
        c3:3
    }

    let {a1, b2} = obj
    console.log(a1, b2);
    

    let arr = [1, 4, 6]
    // Not Optimal way
    // console.log(arr[0]+arr[1]+arr[2]); 
    // console.log(sum(arr[0], arr[1], arr[2]));

    // Spared Operator
    console.log(sum(...arr))
})()

var aa = 6