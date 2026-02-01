let a = prompt("Enter a number");
let b = prompt("Enter another number");

// This will throw an error if a or b is not a number
if (isNaN(a) || isNaN(b)) {
    throw new Error("One of the inputs is not a number");
}

// let sum = parseInt(a) + parseInt(b);

// try {
//     console.log("This sum is ", sum * x); // This will throw an error because x is not defined   
// } catch (error) {
//     console.log("logical error occured", error);
// }
// finally {
//     console.log("Files are closed and DB conntion is being closed");
// } // finally block will always run no matter what, catch that is also run code in return statement while other codes are not executed

function main() {
    let x = 1;
    let sum = parseInt(a) + parseInt(b);
    try {
        console.log("This sum is ", sum * x); // This will throw an error because x is not defined
        return sum*x;   
    } catch (error) {
        return error;
    }
    finally {
        console.log("Files are closed and DB conntion is being closed"); // it always runb no matter wheather the return statement executed or not
    }
    console.log("Files are closed and DB conntion is being closed"); // it will not run because return statement is already executed
}

let c = main();
// console.log(c);
