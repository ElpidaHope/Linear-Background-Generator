var leftColor = document.getElementsByTagName("input")[0];
var rightColor = document.getElementsByTagName("input")[1];
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.getElementById("btn");

setGradient();

function setGradient() {
    body.style.background = `linear-gradient(to right, ${leftColor.value}, ${rightColor.value})`;
    css.innerHTML = body.style.background + ";"
}

var hexColor = ['A', 'B', 'C', 'D','E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateRandomNumber(){
    return Math.floor(Math.random() * hexColor.length)
}

function generateHexColor() {
    color = ''
    i = 0
    while (i < 6) {
        color = color.concat(hexColor[generateRandomNumber()]);
        i++;
    }

    return color
}


function generateGradient() {
    leftColor.value = "#" + generateHexColor()
    rightColor.value = "#" + generateHexColor();
    setGradient()
}

leftColor.addEventListener("input",setGradient);
rightColor.addEventListener("input", setGradient);
button.addEventListener("click", generateGradient);
