let a = [1, 2, 3, 4, 45, 667, 8]
let na = []

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     na.push(element**2)
// }

na = a.map((e , i, arr) => {
    return e**2
})

console.log(na)

const greaterThanSeven = (e =>{
    if(e>7){
        return true
    }
    return false    
})

console.log(na.filter(greaterThanSeven))


// reduce use to reduces the sixe of array into a single value
// let sum = a.reduce(add)
// add is function

let text = "ABCDEFG"
const myArr = Array.from(text);
console.log(myArr)