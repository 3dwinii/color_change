

//random rgb color generator
//generate 3 random numbers between/including 0-255, concatenate them into a string in rgb format: rgb(xxx, xxx, xxx)


function rgbNum() {
var num1 = Math.floor(Math.random() * 256);
var num2 = Math.floor(Math.random() * 256);
var num3 = Math.floor(Math.random() * 256);

console.log("rgb(" + num1 + "," + num2 + "," + num3 + ")");
}
// $(".back").css("background-color", rgbNum);

rgbNum();

//convert rgb into hex value
//h1a/h1b means num1 converted into hex value, first number/letter (a) and second num/letter(b)


var num1 = Math.floor(Math.random() * 256);
var num2 = Math.floor(Math.random() * 256);
var num3 = Math.floor(Math.random() * 256);

    var h1b = num1 % 16;
    var h1a = (num1 - h1b) / 16;

    var h2b = num2 % 16;
    var h2a = (num2 - h2b) / 16;

    var h3b = num3 % 16;
    var h3a = (num3 - h3b) / 16;

    // console.log("h1a is " + h1a + " h1b is " + h1b + " h2a is " + h2a + " h2b is " + h2b + " h3a is " + h3a + " h3b is " + h3b);


    // if (h1a == 10 || h1b == 10 || h2a == 10 || h2b == 10 || h3a == 10 || h3b == 10) {
    //     return("A");
    // } else if (h1a == 11 || h1b == 11 || h2a == 11 || h2b == 11 || h3a == 11 || h3b == 11) {
    //     return("B")
    // } else if (h1a == 12 || h1b == 12 || h2a == 12 || h2b == 12 || h3a == 12 || h3b == 12) {
    //     12 = "C";
    // } else if (h1a == 13 || h1b == 13 || h2a == 13 || h2b == 13 || h3a == 13 || h3b == 13) {
    //     return("D")
    // } else if (h1a == 14 || h1b == 14 || h2a == 14 || h2b == 14 || h3a == 14 || h3b == 14) {
    //     return("E")
    // } else if (h1a == 15 || h1b == 15 || h2a == 15 || h2b == 15 || h3a == 15 || h3b == 15) {
    //     return("F")
    // } else {
    //     return(h1a || h1b || h2a || h2b || h3a || h3b)
    // }

    if (h1a == 10) {
        h1a = "A"
    } else if (h1a == 11) {
        h1a = "B"
    } else if (h1a == 12) {
        h1a = "C"
    } else if (h1a == 13) {
        h1a = "D"
    } else if (h1a == 14) {
        h1a = "E"
    } else if (h1a == 15) {
        h1a = "F"
    } else {
        h1a;
    }

    if (h1b == 10) {
        h1b = "A"
    } else if (h1b == 11) {
        h1b = "B"
    } else if (h1b == 12) {
        h1b = "C"
    } else if (h1b == 13) {
        h1b = "D"
    } else if (h1b == 14) {
        h1b = "E"
    } else if (h1b == 15) {
        h1b = "F"
    } else {
        h1b;
    }

    if (h2a == 10) {
        h2a = "A"
    } else if (h2a == 11) {
        h2a = "B"
    } else if (h2a == 12) {
        h2a = "C"
    } else if (h2a == 13) {
        h2a = "D"
    } else if (h2a == 14) {
        h2a = "E"
    } else if (h2a == 15) {
        h2a = "F"
    } else {
        h2a;
    }

    if (h2b == 10) {
        h2b = "A"
    } else if (h2b == 11) {
        h2b = "B"
    } else if (h2b == 12) {
        h2b = "C"
    } else if (h2b == 13) {
        h2b = "D"
    } else if (h2b == 14) {
        h2b = "E"
    } else if (h2b == 15) {
        h2b = "F"
    } else {
        h2b;
    }

    if (h3a == 10) {
        h3a = "A"
    } else if (h3a == 11) {
        h3a = "B"
    } else if (h3a == 12) {
        h3a = "C"
    } else if (h3a == 13) {
        h3a = "D"
    } else if (h3a == 14) {
        h3a = "E"
    } else if (h3a == 15) {
        h3a = "F"
    } else {
        h3a;
    }

    if (h3b == 10) {
        h3b = "A"
    } else if (h3b == 11) {
        h3b = "B"
    } else if (h3b == 12) {
        h3b = "C"
    } else if (h3b == 13) {
        h3b = "D"
    } else if (h3b == 14) {
        h3b = "E"
    } else if (h3b == 15) {
        h3b = "F"
    } else {
        h3b;
    }



 var hexValue = "#" + h1a + h1b + h2a + h2b + h3a + h3b;

console.log(hexValue);

