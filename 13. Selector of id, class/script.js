let boxes = document.getElementsByClassName("box")

boxes[3].style.backgroundColor = "#C30029"

document.getElementById("color-box").style.backgroundColor = "#293891"

document.querySelector(".box").style.backgroundColor = "#00A65D"

// it return NodeList, you need to set all elment one by one (iterate node list)
// document.querySelectorAll(".box")

document.querySelectorAll(".box").forEach(e =>{
    console.log(e)
    e.style.color = "gold"
})


// it return HTML collection
// e = document.getElementsByTagName("div")

// e[3].matches("color-box")     --> Ture
// e[2].matches("color-box")     --> False

// e[3].matches("color-box")     --> Null
// e[3].closest(".container")    --> .container
// e[3].closest("html")          --> HTML

// document.querySelector(".container").contains(document.querySelector("body"))  --> False
// document.querySelector("body").contains(document.querySelector(".container"))  --> Ture