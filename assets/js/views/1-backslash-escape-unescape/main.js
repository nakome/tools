import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

const demoBtn = document.getElementById("demoBtn");
const resetBtn = document.getElementById("resetBtn");
const resetBtn2 = document.getElementById("resetBtn2");
const copyBtn = document.getElementById("copyBtn");
const textAreaEscaped = document.getElementById("textAreaEscaped");
const textAreaUnescaped = document.getElementById("textAreaUnescaped");


let demo = 'This is an example of text with several backslashes that need to be escaped:\This is a new line.\\tThis is a tab.\\\\This is a double backslash.';
textAreaEscaped.value = demo;
escapeBackslashes(textAreaEscaped);
textAreaEscaped.focus();
textAreaEscaped.addEventListener("input", evt => escapeBackslashes(evt.currentTarget));
textAreaUnescaped.addEventListener("input", evt => unescapeBackslashes(evt.currentTarget));

copyBtn.addEventListener('click', evt => copyToClipboard(evt, textAreaUnescaped.value));
demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEscaped.value = demo;
  escapeBackslashes(textAreaEscaped);
})

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEscaped.value = "";
});

resetBtn2.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaUnescaped.value = "";
})

/**
 * Replaces backslashes with escaped backslashes in the given element's value and updates the unescaped text area with the escaped text.
 *
 * @param {type} elem - description of parameter
 * @return {type} undefined
 */
function escapeBackslashes(elem) {
  const text = elem.value;
  const escapedText = text.replace(/\\/g, "\\\\");
  textAreaUnescaped.value = escapedText;
}

/**
 * Replaces double backslashes with single backslashes in the given element's value.
 *
 * @param {elem} paramName - the element whose value will be unescaped
 * @return {string} the unescaped text
 */
function unescapeBackslashes(elem) {
  const text = elem.value;
  const unescapedText = text.replace(/\\\\/g, "\\");
  textAreaEscaped.value = unescapedText;
}
