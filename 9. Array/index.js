const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// array is mutable, string is not !!
arr[0] = 55666

console.log(arr)
console.log(arr.length)
console.log(arr[0])
console.log(arr[3])
console.log(arr.toString())

// joint operation between an array elements
console.log(arr.join("and"))

const a = [0, 11, 222, 3333]
console.log(a.pop())
a.push(18181, "dhru")
console.log(a)
console.log(a.shift())
console.log(a.unshift("new element"))
delete a[1]

// a.pop()        // remove last element
// a.shift()      // remove first element
// a.unshift()
// a.push("DHRU")

let a1 = [1, 3, 4, 2]
let a2 = ['d', 'h', 'r', 'u']
console.log(a1.concat(a2))
console.log(a1.sort())

// cut out piece from an array it creates new array
console.log(a1.slice(1, 3))

// Create an Array
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi"
fruits.splice(2, 0, "Lemon", "Kiwi");


let array = [1, 2, 435, 5, 6, 758, 9]

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element)
// }

// array.forEach((value, index, array) => {
//     console.log(value, index, array)
// }); 

// for (const key in array) {
//     if (Object.prototype.hasOwnProperty.call(array, key)) {
//         const element = array[key];
//         console.log(element)
//     }
// }

// for (const element of array) {
//     console.log(element)
// }