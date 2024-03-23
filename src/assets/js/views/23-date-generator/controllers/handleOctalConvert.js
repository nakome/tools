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
 * Convert the given octal number to decimal and update the input fields with the converted values.
 *
 * @param {type} inputDateOctal - The octal number input to be converted
 * @return {type} void
 */
export default function handleOctalConvert() {
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
