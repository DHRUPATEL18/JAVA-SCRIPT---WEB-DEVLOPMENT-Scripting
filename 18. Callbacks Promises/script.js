// Callback function is a function that is passed as an argument to another function

// Asynchronous nature of JS
console.log("Start the JS");
console.log("Start 2");

setTimeout(() => {
    console.log("We are in the timeout For 2s");
}, 2000);

setTimeout(() => {
    console.log("We are in the timeout For 0s");
}, 0);

console.log("End");

const fn = () => {
    console.log("Nothing....!")
}

const callback = (arg, fn) => {
    console.log(arg);
    fn();
}

const loadscript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("DHRU PATEL", fn);
    document.head.append(sc);
}

loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback);

// Difficult to understand or manage the code
// Callback hell
// loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
//     console.log(arg);
//     fn("firstarg", () => {
//         WebGLUniformLocation
//     }
//     );
// }
// );

// Promises is used to handle the async code (Handle the callbkack hell)
// Promises are the object that may produce a single value some time in the future

