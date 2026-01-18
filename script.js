const buttons = document.querySelectorAll(".button");
const display = document.getElementById("display");
const calculator = document.getElementById("calculator");

const one = document.getElementById("one").firstElementChild;
const two = document.getElementById("two").firstElementChild;
const three = document.getElementById("three").firstElementChild;
const four = document.getElementById("four").firstElementChild;
const five = document.getElementById("five").firstElementChild;
const six = document.getElementById("six").firstElementChild;
const seven = document.getElementById("seven").firstElementChild;
const eight = document.getElementById("eight").firstElementChild;
const nine = document.getElementById("nine").firstElementChild;
const zero = document.getElementById("zero").firstElementChild;
const decimal = document.getElementById("decimal").firstElementChild;
const power = document.getElementById("power").firstElementChild;
const clear = document.getElementById("clear").firstElementChild;
const backspace = document.getElementById("back").firstElementChild;
const divide = document.getElementById("divide").firstElementChild;
const multiply = document.getElementById("multiply").firstElementChild;
const subtract = document.getElementById("subtract").firstElementChild;
const add = document.getElementById("add").firstElementChild;
const equals = document.getElementById("equals").firstElementChild;

let onScreen = [];

let calculation = {
  value1: null,
  value2: null,
  operant: null,
  result: null,
};

addEventListener("keydown", useKey);
addEventListener("keyup", stopUseKey);

function useKey(key) {
  console.log(key.code);
  if (key.code == "Digit1") {
    one.classList.add("pressed");
    useCalc("one");
  } else if (key.code == "Digit2") {
    two.classList.add("pressed");
    useCalc("two");
  } else if (key.code == "Digit3") {
    three.classList.add("pressed");
    useCalc("three");
  } else if (key.code == "Digit4") {
    four.classList.add("pressed");
    useCalc("four");
  } else if (key.code == "Digit5") {
    five.classList.add("pressed");
    useCalc("five");
  } else if (key.code == "Digit6") {
    six.classList.add("pressed");
    useCalc("six");
  } else if (key.code == "Digit7") {
    seven.classList.add("pressed");
    useCalc("seven");
  } else if (key.code == "Digit8") {
    eight.classList.add("pressed");
    useCalc("eight");
  } else if (key.code == "Digit9") {
    nine.classList.add("pressed");
    useCalc("nine");
  } else if (key.code == "Digit0") {
    zero.classList.add("pressed");
    useCalc("zero");
  } else if (key.code == "Backspace") {
    backspace.classList.add("pressed");
    useCalc("back");
  } else if (key.code == "Enter") {
    equals.classList.add("pressed");
    useCalc("equals");
  } else if (key.code == "Slash") {
    divide.classList.add("pressed");
    useCalc("divide");
  } else if (key.code == "KeyX") {
    multiply.classList.add("pressed");
    useCalc("multiply");
  } else if (key.code == "Minus") {
    subtract.classList.add("pressed");
    useCalc("subtract");
  } else if (key.code == "Equal") {
    add.classList.add("pressed");
    useCalc("add");
  } else if (key.code == "KeyC") {
    clear.classList.add("pressed");
    useCalc("clear");
  };
};

function stopUseKey(key) {
  if (key.code == "Digit1") {
    one.classList.remove("pressed");
  } else if (key.code == "Digit2") {
    two.classList.remove("pressed");
  } else if (key.code == "Digit3") {
    three.classList.remove("pressed");
  } else if (key.code == "Digit4") {
    four.classList.remove("pressed");
  } else if (key.code == "Digit5") {
    five.classList.remove("pressed");
  } else if (key.code == "Digit6") {
    six.classList.remove("pressed");
  } else if (key.code == "Digit7") {
    seven.classList.remove("pressed");
  } else if (key.code == "Digit8") {
    eight.classList.remove("pressed");
  } else if (key.code == "Digit9") {
    nine.classList.remove("pressed");
  } else if (key.code == "Digit0") {
    zero.classList.remove("pressed");
  } else if (key.code == "Backspace") {
    backspace.classList.remove("pressed");
  } else if (key.code == "Enter") {
    equals.classList.remove("pressed");
  } else if (key.code == "Slash") {
    divide.classList.remove("pressed");
  } else if (key.code == "KeyX") {
    multiply.classList.remove("pressed");
  } else if (key.code == "Minus") {
    subtract.classList.remove("pressed");
  } else if (key.code == "Equal") {
    add.classList.remove("pressed");
  } else if (key.code == "KeyC") {
    clear.classList.remove("pressed");
  };
};

buttons.forEach(button => button.addEventListener("click", () => {
  useCalc(button.id);
}));

function useCalc(id) {
  if (id == "clear") {
    onScreen = [];
    display.textContent = onScreen;
    calculation = {
      value1: null,
      value2: null,
      operant: null,
      result: null,
    };
  } else if (id == "back") {
    onScreen.pop();
    display.textContent = onScreen.join("");
  } else if (onScreen.length > 9) {
    display.textContent = "ERR";
  } else if (id == "one") {
    onScreen.push(1);
    display.textContent = onScreen.join("");
  } else if (id == "two") {
    onScreen.push(2);
    display.textContent = onScreen.join("");
  } else if (id == "three") {
    onScreen.push(3);
    display.textContent = onScreen.join("");
  } else if (id == "four") {
    onScreen.push(4);
    display.textContent = onScreen.join("");
  } else if (id == "five") {
    onScreen.push(5);
    display.textContent = onScreen.join("");
  } else if (id == "six") {
    onScreen.push(6);
    display.textContent = onScreen.join("");
  } else if (id == "seven") {
    onScreen.push(7);
    display.textContent = onScreen.join("");
  } else if (id == "eight") {
    onScreen.push(8);
    display.textContent = onScreen.join("");
  } else if (id == "nine") {
    onScreen.push(9);
    display.textContent = onScreen.join("");
  } else if (id == "zero") {
    onScreen.push(0);
    display.textContent = onScreen.join("");
  } else if (id == "divide") {
    testContinue("/");
  } else if (id == "multiply") {
    testContinue("*");
  } else if (id == "subtract") {
    testContinue("-");
  } else if (id == "add") {
    testContinue("+");
  } else if (id == "equals") {
    testContinue();
  };
  boobies();
};

function testContinue(operant) {
  if (calculation.value1 === null) {
    calculation.operant = operant;
    calculation.value1 = Number(onScreen.join(""));
  } else if (calculation.value2 === null) {
    calculation.operant = operant;
  } else {
    calculation.value2 = Number(onScreen.join(""));
    calculate(operant);
  };
  onScreen = [];
};

function calculate() {
  if (calculation.operant == "/") {
    calculation.result = calculation.value1 / calculation.value2;
  } else if (calculation.operant == "*") {
    calculation.result = calculation.value1 * calculation.value2;
  } else if (calculation.operant == "-") {
    calculation.result = calculation.value1 - calculation.value2;
  } else if (calculation.operant == "+") {
    calculation.result = calculation.value1 + calculation.value2;
  };

  result = Math.floor(calculation.result * 1000000) / 1000000;

  if (String(result).length > 9) {
    display.textContent = "ERR";
  } else {
    display.textContent = result;
  };

  calculation = {
    value1: calculation.result,
    value2: null,
    operant: null,
    result: null,
  };
};

function boobies() {
  if (display.textContent == "5318008") {
    calculator.classList.add("rotated");
  } else {
    calculator.classList.remove("rotated");
  };
};
