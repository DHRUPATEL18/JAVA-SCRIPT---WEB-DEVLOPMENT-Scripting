// document.querySelector(".container").innerHTML
// '\n <div class="box">Hey, I am a Box 1.</div>\n <div class="box">Hey, I am a Box 2.</div>\n'

// document.querySelector(".container").innerText
// 'Hey, I am a Box 1.\nHey, I am a Box 2.'

// document.querySelector(".container").outerHTML
// '<div class="container">\n <div class="box">Hey, I am a Box 1.</div>\n <div class="box">Hey, I am a Box 2.</div>\n </div>'

// document.querySelector(".container").textContent
// '\n        Hey, I am a Box 1.\n        Hey, I am a Box 2.\n    '

// document.querySelector(".container").tagName
// 'DIV'

// document.querySelector(".container").nodeName
// 'DIV'

// document.querySelector(".container").hidden
// false

// document.querySelector(".container").hidden = true
// true

document.querySelector(".box").innerHTML = "I am DHRU PATEL."

// document.querySelector(".box").hasAttribute("style")
// ture
// document.querySelector(".box").getAttribute("style")
// display: flex;


document.querySelector(".box").setAttribute("style", "display: inline; color: gold;");
// set flex to inline

// document.querySelector(".box").attributes
// give style attribute

// document.querySelector(".box").removeAttribute("style")
// remove style attribute

// document.querySelector(".box").dataset
// DOMStringMap {createdby: 'dhru', conceptedby: 'dp'}

// document.querySelector(".box").dataset.createdby
// "dhru"

let div = document.createElement("div");
div.innerText = "I am Red Box.";
div.classList.add("redBox");
div.setAttribute("style", "background-color: crimson; width: 99vw; height: 20px;");
document.querySelector(".container").after(div);

// document.querySelector(".container").appendChild(div);
// document.querySelector(".container").prepend(div);
// document.querySelector(".container").before(div);
// document.querySelector(".container").replaceWith(div);

document.querySelector(".container").insertAdjacentHTML("beforebegin", "<h1>Hey, I am a <i>beforebegin<i>.</h1>");
// document.querySelector(".container").insertAdjacentElement("beforebegin", div);
// document.querySelector(".container").insertAdjacentText("beforebegin", "Hey, I am a Text.");

document.querySelector(".container").insertAdjacentHTML("afterbegin", "<h1>Hey, I am a <i>afterbegin<i>.</h1>");

document.querySelector(".container").insertAdjacentHTML("beforeend", "<h1>Hey, I am a <i>beforeend<i>.</h1>");

document.querySelector(".container").insertAdjacentHTML("afterend", "<h1>Hey, I am a <i>afterend<i>.</h1>");

document.querySelector(".boxs").remove();

// document.querySelector(".container").classList
// DOMTokenList(3) ['container', 'red', 'bg-green', value: 'container red bg-green']

// document.querySelector(".container").className
// 'container red bg-green'

document.querySelector(".container").classList.add("dhru")
// add dhru class in container

document.querySelector(".container").classList.remove("red")
// remove red class from container 

document.querySelector(".container").classList.toggle("red") //  make red class if not exist
document.querySelector(".container").classList.toggle("red") // remove red class if exist
document.querySelector(".container").classList.toggle("red") //  make red class if not exist