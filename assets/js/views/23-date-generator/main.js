import generateDateResults from "../../modules/generateDateResults.js";

// Vars
const inputDate = document.getElementById("inputDate");
const inputTime = document.getElementById("inputTime");
const resetBtn = document.getElementById("resetBtn");
const todayBtn = document.getElementById("todayBtn");
const output = document.getElementById("output");
const inputDateTimestamp = document.getElementById("inputDateTimestamp");
const inputDateBinary = document.getElementById("inputDateBinary");
const inputDateHex = document.getElementById("inputDateHex");
const inputDateOctal = document.getElementById("inputDateOctal");
const generate = document.getElementById("generate");

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

todayBtn.addEventListener("click",handleCreateCurrentDate);

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

/**
 * Convert the given octal number to decimal and update the input fields with the converted values.
 *
 * @param {type} inputDateOctal - The octal number input to be converted
 * @return {type} void
 */
function handleOctalConvert() {
    const octalValue = inputDateOctal.value;
    if (!/^[0-7]+$/.test(octalValue)) {
        messageOnTitle("Please insert a valid octal number");
        return;
    }
    // Convert number to decimal
    const d = parseInt(octalValue, 8);
    inputDate.value = new Date(d).toISOString().split("T")[0];
    inputTime.value = new Date(d).toTimeString().split(" ")[0];
    inputDateBinary.value = d.toString(2);
    inputDateTimestamp.value = d.toString(10);
    inputDateHex.value = d.toString(16).toUpperCase();
    const result = new Date(d);
    output.innerHTML = generateTplTimeResults(result);
}

/**
 * Convert number to decimal
 */
function handleBinaryConvert() {
    const binaryValue = inputDateBinary.value;
    if (!/^[01]+$/.test(binaryValue)) {
        messageOnTitle("Please insert a valid binary number");
        return;
    }
    // Convert number to decimal
    const d = parseInt(binaryValue, 2);
    inputDate.value = new Date(d).toISOString().split("T")[0];
    inputTime.value = new Date(d).toTimeString().split(" ")[0];
    inputDateTimestamp.value = d.toString(10);
    inputDateHex.value = d.toString(16).toUpperCase();
    inputDateOctal.value = d.toString(8);
    const result = new Date(d);
    output.innerHTML = generateTplTimeResults(result);
}

/**
 * Handle conversion of hex to decimal and update input fields and output HTML.
 *
 * @param {type} inputDateHex - the hex value to be converted
 * @return {type} void
 */
function handleHexConvert() {
    const hexValue = inputDateHex.value;
    if (!/^[0-9A-Fa-f]+$/.test(hexValue)) {
        messageOnTitle("Please insert a valid hexadecimal number");
        return;
    }
    // Convert number to decimal
    const d = parseInt(hexValue, 16);
    inputDate.value = new Date(d).toISOString().split("T")[0];
    inputTime.value = new Date(d).toTimeString().split(" ")[0];
    inputDateTimestamp.value = d.toString(10);
    inputDateBinary.value = d.toString(2);
    inputDateOctal.value = d.toString(8);
    const result = new Date(d);
    output.innerHTML = generateTplTimeResults(result);
}

/**
 * Convert a timestamp and update inputDate and inputTime values,
 * and update output with the result of generateTplTimeResults.
 *
 * @param {type} inputDateTimestamp - description of parameter
 * @return {type} undefined
 */
function handleTimeStampConvert() {
    const d = parseInt(inputDateTimestamp.value);
    if (isNaN(d) || !/^[0-9]+$/.test(d)) {
        messageOnTitle("Please insert a valid timestamp number");
        return;
    }
    inputDate.value = new Date(d).toISOString().split("T")[0];
    inputTime.value = new Date(d).toTimeString().split(" ")[0];
    inputDateBinary.value = d.toString(2);
    inputDateOctal.value = d.toString(8);
    inputDateHex.value = d.toString(16).toUpperCase();
    const result = new Date(d);
    output.innerHTML = generateTplTimeResults(result);
}

/**
 * Converts the input date and time into a timestamp and generates
 * time results based on the converted date and time.
 *
 * @param {string} inputDate - the input date in the format 'YYYY-MM-DD'
 * @param {string} inputTime - the input time in the format 'HH:MM:SS'
 * @return {string} The generated time results based on the input date and time
 */
function handleDateTimeConvert() {
    const dateTime = new Date(inputDate.value + " " + inputTime.value);
    console.log(dateTime);
    inputDateTimestamp.value = dateTime.getTime();
    inputDateBinary.value = parseInt(dateTime.getTime()).toString(2);
    inputDateOctal.value = parseInt(dateTime.getTime()).toString(8);
    inputDateHex.value = parseInt(dateTime.getTime()).toString(16).toUpperCase();
    output.innerHTML = generateTplTimeResults(dateTime);
}

/**
 * Function to handle date conversion.
 *
 * @return {type} the result of the handleDateTimeConvert function
 */
function handleDateConvert() {
    // Set time to current time
    inputTime.value = date.toTimeString().split(" ")[0];
    return handleDateTimeConvert();
}

/**
 * Handles the creation of the current date and time.
 *
 * @return {type} The result of the handleDateTimeConvert function.
 */
function handleCreateCurrentDate() {
    const date = new Date();
    inputDate.value = date.toISOString().split("T")[0];
    inputTime.value = date.toTimeString().split(" ")[0];
    return handleDateTimeConvert();
}

/**
 * Generate time results for the given result data.
 *
 * @param {object} result - The result data to generate time results from
 * @return {string} The generated time results as a string
 */
function generateTplTimeResults(result) {
    let tpl = "";
    // Get time results
    let data = generateDateResults(result,navigator.language ?? 'en-US');
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            tpl += `<div class="object"><span class="key">${key}:</span> <span class="value">${data[key]}</span></div>`;
        }
    }
    return tpl;
}

function messageOnTitle(txt) {
    let id = document.getElementById('header-title')
    let old = id.textContent;
    id.textContent = txt;
    id.style.color = "var(--danger)";
    setTimeout(() => {
        id.textContent = old;
        id.style.color = "var(--info)";
    }, 3000);
}
