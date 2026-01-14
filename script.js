const buttons = document.querySelectorAll("button");
const display = document.getElementById("display");

const one = document.getElementById("one").firstElementChild;
const two = document.getElementById("two").firstElementChild;
const three = document.getElementById("three").firstElementChild;

let onScreen = [];

addEventListener("keydown", useKey);
addEventListener("keyup", stopUseKey);

function useKey(key) {
  if (key.code == "Digit1") {
    one.classList.add("pressed");
    useCalc("one");
  } else if (key.code == "Digit2") {
    two.classList.add("pressed");
    useCalc("two");
  } else if (key.code == "Digit3") {
    three.classList.add("pressed");
    useCalc("three");
  };
};

function stopUseKey(key) {
  if (key.code == "Digit1") {
    one.classList.remove("pressed");
  } else if (key.code == "Digit2") {
    two.classList.remove("pressed");
  } else if (key.code == "Digit3") {
    three.classList.remove("pressed");
  };
};

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
    onScreen.push(1);
    display.textContent = onScreen.join("");
  } else if (id == "two") {
    onScreen.push(2);
    display.textContent = onScreen.join("");
  } else if (id == "three") {
    onScreen.push(3);
    display.textContent = onScreen.join("");
  };
};
