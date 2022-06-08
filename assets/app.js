console.log("%ccalculator is running...", "color: red");
// window.addEventListener("load", () => {});
let displayScreen = document.querySelector(".display");
let topDisplay = displayScreen.firstElementChild;
let bottomDisplay = displayScreen.lastElementChild;
let buttonsDiv = document.querySelector(".buttons");
let count = 0;
let result = "";

buttonsDiv.addEventListener("click", (e) => {
  bottomDisplay.innerHTML = bottomDisplay.innerHTML.substr(0, 10);
  topDisplay.innerHTML = topDisplay.innerHTML.substr(0, 10);
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
  } else if (e.target.classList.contains("ops")) {
    if (!bottomDisplay.innerHTML) {
      bottomDisplay.innerHTML = "";
    } else {
      topDisplay.innerHTML = bottomDisplay.innerHTML + e.target.innerHTML;
      displayReset(bottomDisplay);
    }
  } else if (e.target.classList.contains("%")) {
    bottomDisplay.innerHTML = parseFloat(bottomDisplay.innerHTML / 100);
  } else if (e.target.classList.contains("nums")) {
    addNumber(e.target.innerHTML);
  } else if (e.target.classList.contains(".")) {
    addNumber(".");
  } else if (e.target.classList.contains("=")) {
    işlem();
  }
});

function addNumber(content) {
  bottomDisplay.innerHTML += content;
}

function displayReset(variable) {
  variable.innerHTML = "";
}

function operation() {
  if (!bottomDisplay.innerHTML) {
    bottomDisplay.innerHTML = "";
  } else {
    topDisplay.innerHTML = bottomDisplay.innerHTML + " " + e.target.innerHTML;
    bottomDisplay.innerHTML = "";
  }
}

function işlem() {
  if (topDisplay.innerHTML.slice(-1) == "+") {
    bottomDisplay.innerHTML = parseFloat(
      (+topDisplay.innerHTML.slice(0, -1) + +bottomDisplay.innerHTML).toFixed(2)
    );
  } else if (topDisplay.innerHTML.slice(-1) == "-") {
    bottomDisplay.innerHTML = parseFloat(
      (topDisplay.innerHTML.slice(0, -1) - bottomDisplay.innerHTML).toFixed(2)
    );
  } else if (topDisplay.innerHTML.slice(-1) == "x") {
    bottomDisplay.innerHTML = parseFloat(
      (topDisplay.innerHTML.slice(0, -1) * bottomDisplay.innerHTML).toFixed(2)
    );
  } else if (topDisplay.innerHTML.slice(-1) == "/") {
    bottomDisplay.innerHTML = parseFloat(
      (topDisplay.innerHTML.slice(0, -1) / bottomDisplay.innerHTML).toFixed(2)
    );
  }
}
