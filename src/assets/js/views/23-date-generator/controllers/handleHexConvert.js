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
 * Handle conversion of hex to decimal and update input fields and output HTML.
 *
 * @param {type} inputDateHex - the hex value to be converted
 * @return {type} void
 */
export default function handleHexConvert() {
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
