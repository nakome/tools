import decodeUnicode from "../../../js/modules/decodeUnicode.js";
import encodeUnicode from "../../../js/modules/encodeUnicode.js";
import copyToClipboard from "../../../js/modules/copyToClipboard.js";

const copyBtnEncode = document.getElementById("copyBtnEncode");
const copyBtnDecoded = document.getElementById("copyBtnDecoded");
const textAreaInput = document.getElementById("textAreaInput");
const textAreaOutput = document.getElementById("textAreaOutput");
const demoBtn = document.getElementById("demoBtn");
const resetBtn = document.getElementById("resetBtn");
const resetBtn2 = document.getElementById("resetBtn2");

copyBtnEncode.addEventListener('click', evt => copyToClipboard(evt, textAreaInput.value));
copyBtnDecoded.addEventListener('click', evt => copyToClipboard(evt, textAreaOutput.value));

textAreaOutput.value = encodeUnicode(textAreaInput.value);

textAreaInput.addEventListener('input', evt => {
    textAreaOutput.value = encodeUnicode(evt.currentTarget.value);
});

textAreaOutput.addEventListener('input', evt => {
    textAreaInput.value = decodeUnicode(evt.currentTarget.value);
});

demoBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaOutput.value = encodeUnicode('Hello World');
    textAreaInput.value = 'Hello World';
}, false);

resetBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInput.value = '';
}, false);

resetBtn2.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaOutput.value = '';
}, false);