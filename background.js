var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradent");

function selectColors(){
    body.style.background = "linear-gradient(to right, " +color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", selectColors);
color2.addEventListener("input", selectColors);

// css.innerHTML = "Your new color are " + color1.value + " " + color2.value ;