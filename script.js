const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

const one = 1;
const two = 2;
const three = 3;
const four = 4;
const five = 5;
const six = 6;
const seven = 7;
const eight = 8;
const nine = 9;
const zero = 0;

let onScreen = [];

buttons.forEach(button => button.addEventListener("click", () => {
  useCalc(button.id);
}));

function useCalc(id) {
  if (id == "clear") {
    onScreen = [];
    display.textContent = onScreen;
  } else if (onScreen.length > 9) {
    display.textContent = "ERR";
  } else if (id == "one") {
    onScreen.push(one);
    display.textContent = onScreen.join("");
  } else if (id == "two") {
    onScreen.push(two);
    display.textContent = onScreen.join("");
  } else if (id == "three") {
    onScreen.push(three);
    display.textContent = onScreen.join("");
  };
};
