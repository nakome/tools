import generateTplTimeResults from "./generateTplTimeResults.js";
import {
  inputDate,
  inputTime,
  output,
  inputDateTimestamp,
  inputDateBinary,
  inputDateHex,
  inputDateOctal,
} from "./vars.js";


/**
 * Converts the input date and time into a timestamp and generates
 * time results based on the converted date and time.
 *
 * @param {string} inputDate - the input date in the format 'YYYY-MM-DD'
 * @param {string} inputTime - the input time in the format 'HH:MM:SS'
 * @return {string} The generated time results based on the input date and time
 */
export default function handleDateTimeConvert() {
    const dateTime = new Date(inputDate.value + " " + inputTime.value);
    console.log(dateTime);
    inputDateTimestamp.value = dateTime.getTime();
    inputDateBinary.value = parseInt(dateTime.getTime()).toString(2);
    inputDateOctal.value = parseInt(dateTime.getTime()).toString(8);
    inputDateHex.value = parseInt(dateTime.getTime()).toString(16).toUpperCase();
    output.innerHTML = generateTplTimeResults(dateTime);
}