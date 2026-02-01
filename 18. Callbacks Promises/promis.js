console.log('Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject('Error, Random number not supporting the condition');
    }
    else{
        setTimeout(() => {  
            console.log('Yes I am done');
            resolve('Success'); // If the task is successful             
        }, 2000);
    }
});

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject('Error, Random number not supporting the condition 2');
    }
    else{
        setTimeout(() => {  
            console.log('Yes I am done2');
            resolve('Success 2'); // If the task is successful            
        }, 2000);
    }
});


// catch is used to catch the error
// finally is always executed whether the promise is resolved or rejected, use for clean up the code

prom1.then((a) =>{
    console.log(a);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Finally is always executed');
});


// Promise API

// when all the promises are resolved then only the then block is executed
// if any of the promise is rejected then the then block is not executed

// let p3 = Promise.all([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// }) 

// let p3 = Promise.allSettled([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// }) 


// which one is fast is given by the promise
// let p3 = Promise.race([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// }) 


// which one is sloved first is given by the promise
// let p3 = Promise.any([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// }) 


// let p3 = Promise.resolve([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// }) 

// let p3 = Promise.reject([prom1, prom2]);
// p3.then((a) =>{
//     console.log(a);
// }).catch((error)=>{
//     console.log(error);
// }) 
