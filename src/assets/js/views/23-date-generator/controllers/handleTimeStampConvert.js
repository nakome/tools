import generateTplTimeResults from "./generateTplTimeResults.js";
import messageOnTitle from "./messageOnTitle.js";
import {
    inputDate,
    inputTime,
    output,
    inputDateTimestamp,
    inputDateBinary,
    inputDateHex,
    inputDateOctal
} from "./vars.js";


/**
 * Convert a timestamp and update inputDate and inputTime values,
 * and update output with the result of generateTplTimeResults.
 *
 * @param {type} inputDateTimestamp - description of parameter
 * @return {type} undefined
 */
export default function handleTimeStampConvert() {
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