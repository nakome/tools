import handleGenerateBtn from "./controllers/handleGenerateBtn.js";
import handleCreateCurrentDate from "./controllers/handleCreateCurrentDate.js"
import handleReset from "./controllers/handleReset.js";
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

generate.addEventListener("click", handleGenerateBtn);
todayBtn.addEventListener("click", handleCreateCurrentDate);
resetBtn.addEventListener("click", handleReset);