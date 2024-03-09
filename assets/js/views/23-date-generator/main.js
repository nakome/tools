import generateDateResults from "../../modules/date-generator.js";

// Vars
const inputDate = document.getElementById('inputDate');
const inputTime = document.getElementById('inputTime');
const resetBtn = document.getElementById('resetBtn');
const output = document.getElementById('output');
const inputDateTimestamp = document.getElementById('inputDateTimestamp');
const inputDateBinary = document.getElementById('inputDateBinary');
const inputDateHex = document.getElementById('inputDateHex');
const inputDateOctal = document.getElementById('inputDateOctal');
const generate = document.getElementById('generate');


// Clear timestamp on change date or time
[inputDate, inputTime].forEach(item => {
    item.addEventListener('change', evt => {
        evt.preventDefault();
        inputDateTimestamp.value = '';
        inputDateBinary.value = '';
        inputDateHex.value = '';
        inputDateOctal.value = '';
    })
})

generate.addEventListener('click', evt => {
    evt.preventDefault();
    // if octal is set
    if(inputDateOctal.value) handleOctalConvert();
    // if binary is set
    else if (inputDateBinary.value) handleBinaryConvert();
    // if binary is set
    else if (inputDateHex.value) handleHexConvert();
    // if timestamp is set
    else if (inputDateTimestamp.value) handleTimeStampConvert()
    // if date and time are set
    else if (inputDate.value && inputTime.value) handleDateTimeConvert()
    // if only date is set
    else if (inputDate.value && inputTime.value.length === 0) handleDateConvert()
    // if all is empty
    else if (inputDate.value.length === 0 && inputTime.value.length === 0) handleCreateCurrentDate()
})

// Reset today
resetBtn.addEventListener('click', evt => {
    let arr = [inputDateOctal,inputDateBinary,inputDateHex,inputDateTimestamp,inputDate,inputTime];
    arr.forEach(item => item.value = '');
    output.textContent = '';
}, false);

// Init with current date
handleCreateCurrentDate();

/**
 * Convert the given octal number to decimal and update the input fields with the converted values.
 *
 * @param {type} inputDateOctal - The octal number input to be converted
 * @return {type} void
 */
function handleOctalConvert() {
    // Convert number to decimal
    const d = parseInt(inputDateOctal.value, 8);
    inputDate.value = new Date(d).toISOString().split('T')[0];
    inputTime.value = new Date(d).toTimeString().split(' ')[0];
    inputDateBinary.value = d.toString(2);
    inputDateTimestamp.value = d.toString(10);
    inputDateHex.value = d.toString(16).toUpperCase();
    let result = new Date(d);
    output.innerHTML = generateTplTimeResults(result);
}

/**
 * Convert number to decimal
 */
function handleBinaryConvert() {
    // Convert number to decimal
    const d = parseInt(inputDateBinary.value, 2);
    inputDate.value = new Date(d).toISOString().split('T')[0];
    inputTime.value = new Date(d).toTimeString().split(' ')[0];
    inputDateTimestamp.value = d.toString(10);
    inputDateHex.value = d.toString(16).toUpperCase();
    inputDateOctal.value = d.toString(8);
    let result = new Date(d);
    output.innerHTML = generateTplTimeResults(result);
}

/**
 * Handle conversion of hex to decimal and update input fields and output HTML.
 *
 * @param {type} inputDateHex - the hex value to be converted
 * @return {type} void
 */
function handleHexConvert() {
    // Convert number to decimal
    const d = parseInt(inputDateHex.value, 16);
    inputDate.value = new Date(d).toISOString().split('T')[0];
    inputTime.value = new Date(d).toTimeString().split(' ')[0];
    inputDateTimestamp.value = d.toString(10);
    inputDateBinary.value = d.toString(2);
    inputDateOctal.value = d.toString(8);
    let result = new Date(d);
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
    inputDate.value = new Date(d).toISOString().split('T')[0];
    inputTime.value = new Date(d).toTimeString().split(' ')[0];
    inputDateBinary.value = d.toString(2);
    inputDateOctal.value = d.toString(8);
    inputDateHex.value = d.toString(16).toUpperCase();
    let result = new Date(d);
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
    const dateTime = new Date(inputDate.value + ' ' + inputTime.value);
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
    inputTime.value = date.toTimeString().split(' ')[0];
    return handleDateTimeConvert();
}

/**
 * Handles the creation of the current date and time.
 *
 * @return {type} The result of the handleDateTimeConvert function.
 */
function handleCreateCurrentDate() {
    const date = new Date();
    inputDate.value = date.toISOString().split('T')[0];
    inputTime.value = date.toTimeString().split(' ')[0];
    return handleDateTimeConvert();
}



/**
 * Generate time results for the given result data.
 *
 * @param {object} result - The result data to generate time results from
 * @return {string} The generated time results as a string
 */
function generateTplTimeResults(result) {
    let tpl = '';
    // Get time results
    let data = generateDateResults(result);
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            tpl += `<div class="object"><span class="key">${key}:</span> <span class="value">${data[key]}</span></div>`
        }
    }
    return tpl;
}