import handleOctalConvert from "./controllers/handleOctalConvert.js"
import handleBinaryConvert from "./controllers/handleBinaryConvert.js"
import handleHexConvert from "./controllers/handleHexConvert.js"
import handleTimeStampConvert from "./controllers/handleTimeStampConvert.js"
import handleDateTimeConvert from "./controllers/handleDateTimeConvert.js"
import handleDateConvert from "./controllers/handleDateConvert.js"
import handleCreateCurrentDate from "./controllers/handleCreateCurrentDate.js"

import {
    inputDate,
    inputTime,
    resetBtn,
    todayBtn,
    output,
    inputDateTimestamp,
    inputDateBinary,
    inputDateHex,
    inputDateOctal,
    generate
} from "./controllers/vars.js";

// Clear timestamp on change date or time
[inputDate, inputTime].forEach((item) => {
    item.addEventListener("change", (evt) => {
        evt.preventDefault();
        inputDateTimestamp.value = "";
        inputDateBinary.value = "";
        inputDateHex.value = "";
        inputDateOctal.value = "";
    });
});

const clearAllFields = () => {
    inputDate.value = "";
    inputTime.value = "";
    inputDateBinary.value = "";
    inputDateHex.value = "";
    inputDateTimestamp.value = "";
    inputDateOctal.value = "";
};

[inputDateTimestamp, inputDateBinary, inputDateHex, inputDateOctal].forEach(
    (item) => item.addEventListener("paste", clearAllFields)
);

generate.addEventListener("click", (evt) => {
    evt.preventDefault();
    const octalValue = inputDateOctal.value;
    const binaryValue = inputDateBinary.value;
    const hexValue = inputDateHex.value;
    const timestampValue = inputDateTimestamp.value;
    const dateValue = inputDate.value;
    const timeValue = inputTime.value;

    if (octalValue) handleOctalConvert();
    else if (binaryValue) handleBinaryConvert();
    else if (hexValue) handleHexConvert();
    else if (timestampValue) handleTimeStampConvert();
    else if (dateValue && timeValue) handleDateTimeConvert();
    else if (dateValue && !timeValue.length) handleDateConvert();
    else handleCreateCurrentDate();
});

todayBtn.addEventListener("click", handleCreateCurrentDate);

// Reset today
resetBtn.addEventListener(
    "click",
    (evt) => {
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
    },
    false
);