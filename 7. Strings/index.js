let str = "my name is dhru";
console.log(str[0], str[4])
console.log(str.slice(11, 15))
console.log(str.slice(12))
console.log(str.replace("dhru", "dp18"))
console.log(str.length)

let Name = "dhru"
let frd = "patel"
console.log(Name.concat(" ", frd, " yes is working"))
console.log("His name is " + Name + " and his frd name is " + frd)
console.log(`His name is ${Name} "and" his frd name is ${frd}`) // Use Backtick here ``

// escape squences
// \n new line \t new tab \r carriage return

console.log(Name.toLowerCase())
console.log(Name.toUpperCase())

// remove write spaces
let n = "          dhr u  "
console.log(n.trim())
console.log(n.indexOf("dh"))

// n.startsWith("d")
// n.endsWith(" ")
