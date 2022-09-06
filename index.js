var num1 = Math.floor(Math.random() * 255) + 1;
var num2 = Math.floor(Math.random() * 255) + 1;
var num3 = Math.floor(Math.random() * 255) + 1;
var col1 = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
var col2 = "rgb(" + num2 + ", " + num3 + ", " + num1 + ")";
var col3 = "rgb(" + num3 + ", " + num1 + ", " + num2 + ")";


document.querySelector(".ball-one").style.backgroundColor = col1;
document.querySelector(".ball-two").style.backgroundColor = col2;
document.querySelector(".ball-three").style.backgroundColor = col3;