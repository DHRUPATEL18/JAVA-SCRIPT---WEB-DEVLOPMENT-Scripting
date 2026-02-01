// All Event are there, you can check it out!!
// https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events

let button = document.getElementById("btn");

button.addEventListener("click", function() {
    //   alert("Button clicked");
    document.querySelector(".container").innerHTML = "yayyy your were <b>clicked</b>";
});

button.addEventListener("dblclick", function() {
    //   alert("Button clicked");
    document.querySelector(".container").innerHTML = "yayyy your were <b>clicked double</b>";
});

button.addEventListener("contextmenu", function() {
      alert("Do not click right button");
});

document.addEventListener("keydown", function(e) {
    console.log("Down key is this");
    document.getElementsByTagName("span")[0].innerHTML = `Key pressed: ${e.key}`;
});
