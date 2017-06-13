var currentValue = null;

var currentFunction = null;

function checkIfCurrentValueIsNull(num){    //not in use
    if(currentValue == null){
        currentValue = num;
    }
}

function add(num){
    currentValue += num;
}

function subtract(num){
    currentValue -= num;
}

function multiply(num){
    currentValue *= num;
}

function divide(num){
    currentValue /= num;
}

function clear(){   //not working
    currentValue = null;
    currentFunction = null;
    document.getElementById("display").innerHTML = "";
}