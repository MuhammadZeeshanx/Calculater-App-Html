
let currentInput = '';
let display = document.getElementById('result');

function clearDisplay() {
  currentInput = '';
  display.value = '0';
}

function appendToDisplay(value) {
  if (currentInput === '0' && value !== '0') {
    currentInput = value;
  } else {
    currentInput += value;
  }
  display.value = currentInput;
}

function calculateResult() {
  try {
    currentInput = eval(currentInput).toString();
    display.value = currentInput;
  } catch (error) {
    display.value = 'Error';
  }
}
