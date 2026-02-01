// It is call back function way to wait

// function getData() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve(455);
//         }, 4500);
//     });
// }

// console.log('loding modules');

// console.log('Do Some Thing Else');

// console.log('Load Data');

// let data = getData();

// data.then(()=>{
//     console.log(data);

//     console.log("Process Data");

//     console.log('Task 2');
// })



// Create Async function it will run on background
// async function getData() {
//     // Simulate getting data from server
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(455);
//         }, 4500);
//     });
// }

// async function getData() {
//     // Simulate getting data from server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1');      // promise 1
//     let data = await x.json();                                                // promise 2
//     return data;
// }

async function getData() {
    // Simulate getting data from server
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
    // promise 1

    let data = await x.json();
    // promise 2
    
    return data;
}



async function main() {
    console.log('loding modules');

    console.log('Do Some Thing Else');

    console.log('Load Data');

    // await will wait for the data to come, it must be in async function
    let data = await getData();                                               // promise 3
    console.log(data);

    console.log("Process Data");

    console.log('Task 2');
}

// promise is code execution thrown in background and it will return the result in future

// settle means resolve or reject
// reslove means promise has settled successfully
// reject means promise has not settled with error

// posts request use to send data to server
// get request use to get data from server
// put request use to update data on server
// delete request use to delete data from server
// options request use to get the supported (meta data) methods on server to check or test the server

main();