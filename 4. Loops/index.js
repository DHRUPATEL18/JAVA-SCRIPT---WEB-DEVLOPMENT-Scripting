console.log("LOOPS CONCEPT")

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i + 1);
} 

let obj = { 
    name : "dhru",
    cpy : "microsoft",
    salary : "70k"
}

// for in loop
for (const key in obj){
    const element = obj[key];
    console.log(key, element)
}

// for of loop
for (const c of "dhrup") {
    console.log(c)
}

// while loop
let i = 4;
while (i<6) {
    console.log(i);
    i++;
}

// do... while loop
let ii = 4;
do {
    console.log(ii)
    ii++;    
} while (ii<6);