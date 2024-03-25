import handleOctalConvert from "./handleOctalConvert.js"
import handleBinaryConvert from "./handleBinaryConvert.js"
import handleHexConvert from "./handleHexConvert.js"
import handleTimeStampConvert from "./handleTimeStampConvert.js"
import handleDateTimeConvert from "./handleDateTimeConvert.js"
import handleDateConvert from "./handleDateConvert.js"
import handleCreateCurrentDate  from "./handleCreateCurrentDate.js"
import {
    inputDate,
    inputTime,
    inputDateTimestamp,
    inputDateBinary,
    inputDateHex,
    inputDateOctal
} from "./vars.js";

const handleGenerateBtn = (evt) => {
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
}

export default handleGenerateBtn;