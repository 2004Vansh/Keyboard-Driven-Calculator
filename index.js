const display = document.getElementById("display");

function handleButtonClick(input){
    if (input === 'C') {
        clearDisplay();
    } else if (input === '=') {
        calculate();
    } else {
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
     
        display.value=eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if ('0123456789+-*/.'.includes(key)) {
        handleButtonClick(key);
    } else if (key === 'Enter') {
        handleButtonClick('=');
    } else if (key === 'Delete') {
        handleButtonClick('C');
    }
});