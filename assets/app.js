console.log("%ccalculator is running...", "color: red");

const displayScreen = document.querySelector(".display");

window.addEventListener("load", () => {});

let buttonsDiv = document.querySelector(".buttons");
// let classes = buttonsDiv.classList;

buttonsDiv.addEventListener("click", (e) => {
  if (e.target.classList.contains("AC")) {
    // console.log(e.target);
    displayScreen.firstElementChild.innerHTML = "asddd";
    console.log("AC CLICK");
    // e.preventDefault();
  }
});

// let ac = document.querySelector(".AC");

// ac.addEventListener("click", function (e) {
//   // console.log(hak);
//   console.log("asds");
//   document.querySelector(".display").firstElementChild.innerHTML = "asddd";
//   e.preventDefault();
// });

// document.querySelector(".buttons").classList.contains("AC");
