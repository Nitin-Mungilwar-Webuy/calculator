let string = "";
const numbersKeys = document.querySelectorAll(".numbersKeys");
const operatorsKeys = document.querySelectorAll(".operatorsKeys");
const clearButtonKey = document.querySelector(".clear");
let outputResult = document.querySelector("input");
const elementsArray = [...numbersKeys, ...operatorsKeys];
elementsArray.forEach((element) => {
  element.addEventListener("click", (e) => {
    switch (e.target.dataset.value) {
      case "=":
        string = eval(string);
        break;
      case "ClearOneChar":
        string = string.toString().slice(0, -1);
        break;
      case "ClearAll":
        string = "";
        break;
      case "percentage":
        string = eval(string) / 100;
        break;
      default:
        string = string + e.target.dataset.value;
        break;
    }
    outputResult.value = string;
  });
});
