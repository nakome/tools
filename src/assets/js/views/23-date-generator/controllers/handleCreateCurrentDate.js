import handleDateTimeConvert from "./handleDateTimeConvert.js";
import { inputDate, inputTime } from "./vars.js";

/**
 * Handles the creation of the current date and time.
 *
 * @return {type} The result of the handleDateTimeConvert function.
 */
export default function handleCreateCurrentDate() {
  const date = new Date();
  inputDate.value = date.toISOString().split("T")[0];
  inputTime.value = date.toTimeString().split(" ")[0];
  return handleDateTimeConvert();
}
