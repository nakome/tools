import handleDateTimeConvert from "./handleDateTimeConvert.js";

import { inputTime } from "./vars.js";

/**
 * Function to handle date conversion.
 *
 * @return {type} the result of the handleDateTimeConvert function
 */
export default function handleDateConvert() {
  // Set time to current time
  inputTime.value = date.toTimeString().split(" ")[0];
  return handleDateTimeConvert();
}
