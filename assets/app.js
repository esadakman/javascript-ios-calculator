console.log("%ccalculator is running...", "color: red");
// window.addEventListener("load", () => {});
let displayScreen = document.querySelector(".display");
let topDisplay = displayScreen.firstElementChild;
let bottomDisplay = displayScreen.lastElementChild;
let buttonsDiv = document.querySelector(".buttons");
// let classes = buttonsDiv.classList;

buttonsDiv.addEventListener("click", (e) => {
  // let bottt = bottomDisplay.innerHTML;
  // bottomDisplay.innerHTML = bottomDisplay.innerHTML.substr(0, 10);
  // topDisplay.innerHTML = topDisplay.innerHTML.substr(0, 10);
  if (e.target.classList.contains("AC")) {
    displayReset(bottomDisplay);
    displayReset(topDisplay);
    // e.preventDefault();
  } else if (e.target.classList.contains("±")) {
    if (bottomDisplay.innerHTML[0] === "-") {
      bottomDisplay.innerHTML = bottomDisplay.innerHTML.substring(1);
    } else {
      bottomDisplay.innerHTML = "-" + bottomDisplay.innerHTML;
    }
  } else if (e.target.classList.contains("%")) {
    bottomDisplay.innerHTML = bottomDisplay.innerHTML / 100;
  } else if (e.target.classList.contains("ops")) {
    operation(e.target.innerHTML);
  } else if (e.target.classList.contains("nums")) {
    addNumber(e.target.innerHTML);
  } else if (e.target.classList.contains(".")) {
    addNumber(".");
  } else if (e.target.classList.contains("=")) {
    bottomDisplay.innerHTML =
      ~~bottomDisplay.innerHTML + ~~topDisplay.innerHTML;
    displayReset(topDisplay);
  }
});

function addNumber(content) {
  bottomDisplay.innerHTML += content;
}

function displayReset(variable) {
  variable.innerHTML = "";
}

function operation(x) {
  topDisplay.innerHTML = bottomDisplay.innerHTML + x;
  displayReset(bottomDisplay);
}
