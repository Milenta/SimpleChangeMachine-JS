"use strict";

const inputMoney = prompt(
  "Type amount of money you want to change. You can choose between next options : E5, E2, E1, 50p, 20p."
);

if (inputMoney === "E5") {
  document.getElementById("h1-el").innerText = "Your change is E2 E2 E1";
} else if (inputMoney === "E2") {
  document.getElementById("h1-el").innerText = `Your change is E1 E1`;
} else if (inputMoney === "E1") {
  document.getElementById("h1-el").innerText = "Your change is 50p 50p";
} else if (inputMoney === "50p") {
  document.getElementById("h1-el").innerText = "Your change is 20p 20p 10p";
} else if (inputMoney === "20p") {
  document.getElementById("h1-el").innerText = "Your change is 10p 10p";
} else {
  document.getElementById(
    "h1-el"
  ).innerText = `Machin can not accept ${typeof inputMoney} ${inputMoney}`;
}
