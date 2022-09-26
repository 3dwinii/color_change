

//random rgb color generator
//generate 3 random colors between/including 0-255, concatenate them into a string in rgb format: rgb(xx, xx, xx)

function rgbNum() {
    var num1 = Math.floor(Math.random() * 256);
    var num2 = Math.floor(Math.random() * 256);
    var num3 = Math.floor(Math.random() * 256);

    return("rgb(" + num1 + ", " + num2 + ", " + num3 + ")");
}


$(".back").css("background-color", rgbNum);





