import generateRandomString from "../../../js/modules/generateRandomString.js";

const numberStr = document.getElementById("str-number");
const lengthStr = document.getElementById("str-length");
const uniqueStr = document.getElementById("str-unique");
const uppercaseStr = document.getElementById("str-uppercase");
const lowercaseStr = document.getElementById("str-lowercase");
const numbersStr = document.getElementById("str-numbers");
const customStr = document.getElementById("str-custom");
const generate = document.getElementById("generate");
const output = document.getElementById("output");

const options = {
  count:  10,
  length: 10,
  unique: false,
  uppercase: true,
  lowercase: false,
  numbers: false,
  customCharacters: "áéíóú",
};
output.innerHTML = "";
const randomStrings = generateRandomString(options);
randomStrings.map((item) => {
  output.innerHTML += `<span>${item}</span>`;
});

generate.addEventListener("click",handleGenerate,false);

function handleGenerate(evt) {
  evt.preventDefault();
  if(numberStr.value > 100  ||  lengthStr.value > 100) {
    alert('Error, only 100 characters can be generated');
    return false;
  }
  const options = {
    count: numberStr.value || 5,
    length: lengthStr.value || 10,
    unique: (uniqueStr.checked) ? true : false,
    uppercase: (uppercaseStr.checked) ? true : false,
    lowercase: (lowercaseStr.checked) ? true : false,
    numbers: (numbersStr.checked) ? true : false,
    customCharacters: customStr.value,
  };
  output.innerHTML = "";
  const randomStrings = generateRandomString(options);
  randomStrings.map((item) => {
    output.innerHTML += `<span>${item}</span>`;
  });
}