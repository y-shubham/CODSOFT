let currentInput = '';

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').textContent = '0';
}

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById('display').textContent = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    document.getElementById('display').textContent = currentInput;
  } catch (error) {
    document.getElementById('display').textContent = 'Error';
    currentInput = '';
  }
}
