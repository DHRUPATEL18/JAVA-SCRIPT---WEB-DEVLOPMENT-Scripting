let cont = document.body.childNodes[1]


cont.firstElementChild.style.backgroundColor = "crimson"
cont.lastElementChild.style.color = "red"

cont.lastElementChild.parentElement.style.color = "gold"

cont.firstElementChild.nextElementSibling.style.backgroundColor = "black"
cont.lastElementChild.previousElementSibling.style.backgroundColor = "black"
