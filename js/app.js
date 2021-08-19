let operation = document.querySelector(".output");
const buttonValues = document.querySelectorAll(".button:not(.clear, .result)");
const resultButton = document.querySelector(".result");
const clearButton = document.querySelector(".clear");
let calc = (number) => {
  operation.value += number;
};

let clearConsole = () => {
  operation.value = "";
};

let result = () => {
  operation.value = eval(operation.value);
};

resultButton.onclick = result;
clearButton.onclick = clearConsole;

buttonValues.forEach((button) => {
  button.onclick = function () {
    calc(button.dataset.value);
  };
});
