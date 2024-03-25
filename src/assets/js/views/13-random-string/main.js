import generateRandomString from "../../../js/modules/generateRandomString.js";
import handleGenerate from "./controllers/handleGenerate.js";

import {
  generate,
  output
} from "./controllers/vars.js";

const options = {
  count: 10,
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

generate.addEventListener("click", handleGenerate, false);

