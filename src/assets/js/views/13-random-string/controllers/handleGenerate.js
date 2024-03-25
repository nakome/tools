import generateRandomString from "../../../modules/generateRandomString.js";

import {
    numberStr,
    lengthStr,
    uniqueStr,
    uppercaseStr,
    lowercaseStr,
    numbersStr,
    customStr,
    output
} from "./vars.js";

export default function handleGenerate(evt) {
    evt.preventDefault();
    if (numberStr.value > 100 || lengthStr.value > 100) {
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