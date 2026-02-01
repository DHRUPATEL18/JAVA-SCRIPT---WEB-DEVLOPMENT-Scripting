rndN = Math.random();
console.log(rndN);

let input1 = parseInt(prompt("Enter Number 1:"));
let input2 = parseInt(prompt("Enter Number 2:"));
let charop = prompt("Choose opration : + - / *");

let e = { 
    "+": "-", 
    "-": "/", 
    "*": "+", 
    "/": "**" 
};

function cal(rndN, input1, input2) {
  if (rndN <= 0.1) {
    if (charop == "+") {
      return input1 - input2;
    } else if (charop == "-") {
      return input1 / input2;
    } else if (charop == "*") {
      return input1 + input2;
    } else if (charop == "/") {
      return input1 ** input2;
    } else {
      return "error!!";
    }
  } else {
    if (charop == "+") {
      return input1 + input2;
    } else if (charop == "-") {
      return input1 - input2;
    } else if (charop == "*") {
      return input1 * input2;
    } else if (charop == "/") {
      return input1 / input2;
    } else {
      return "error!!";
    }
  }
}

ans = cal(rndN, input1, input2);
document.write(input1, charop, input2, " = ", ans);
