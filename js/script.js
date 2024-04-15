const btnDisplay = document.querySelector(".btn-add--display");
const btnAdd = document.querySelector(".btn-add--add");
const btnSubtract = document.querySelector(".btn-add--subtract");
const btnDivide = document.querySelector(".btn-add--divide");
const btnMultiply = document.querySelector(".btn-add--multiply");

const buttonElements = document.querySelectorAll(".btn");

buttonElements.forEach((el) => {
  el.addEventListener("click", function (e) {
    const clicked = e.target;

    let num = parseInt(btnDisplay.innerText);

    if (clicked === btnAdd) {
      if (num === -1) {
        btnDisplay.innerText = num + 2;
      } else {
        btnDisplay.innerText = num + 1;
      }
    } else if (clicked === btnSubtract) {
      if (num === 2) {
        btnDisplay.innerText = num - 1;
      } else {
        btnDisplay.innerText = num - 2;
      }
    } else if (clicked === btnMultiply) {
      btnDisplay.innerText = num * 2;
    } else if (clicked === btnDivide) {
      if (num === 1) {
        btnDisplay.innerText = 2 / 2;
      } else if (num == -1) {
        btnDisplay.innerText = -2 / 2;
      } else {
        btnDisplay.innerText = num / 2;
      }
    }
  });
});

// btnDisplay.addEventListener("click", function () {
//   let num = document.getElementById("btn-add").innerText;
//   document.getElementById("btn-add").innerText = parseInt(num) - 2;
// });
