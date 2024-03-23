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
 * Convert number to decimal
 */
export default function handleBinaryConvert() {
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