let currentInput = '0';
let previousInput = '';
let operator = null;

function updateDisplay() {
  document.getElementById('display').textContent = currentInput;
}

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else if (number === '.' && currentInput.includes('.')) {
    return;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  previousInput = '';
  operator = null;
  updateDisplay();
}

function toggleSign() {
  currentInput = (parseFloat(currentInput) * -1).toString();
  updateDisplay();
}

function percent() {
  currentInput = (parseFloat(currentInput) / 100).toString();
  updateDisplay();
}

function setOperation(op) {
  if (operator !== null) {
    calculate();
  }
  previousInput = currentInput;
  currentInput = '0';
  operator = op;
}

function calculate() {
  let result = 0;
  const prev = parseFloat(previousInput);
  const current = parseFloat(currentInput);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = current === 0 ? 'Error' : prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  updateDisplay();
}
