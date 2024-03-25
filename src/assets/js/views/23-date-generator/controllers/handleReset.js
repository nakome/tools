import {output} from './vars.js';
const handleReset = (evt) => {
    let arr = [
        inputDateOctal,
        inputDateBinary,
        inputDateHex,
        inputDateTimestamp,
        inputDate,
        inputTime,
    ];
    arr.forEach((item) => (item.value = ""));
    output.textContent = "";
}

export default handleReset;