export const imageDisplay = document.getElementById('image-display');
export const imgInput = document.getElementById("image-input");
export const demoBtn = document.getElementById("demoBtn");
export const resetBtn = document.getElementById("resetBtn");
export const demo = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="120" height="120"> 
  <rect x="14" y="23" width="200" height="50" fill="#f55" stroke="black" />
</svg>`;
export const textAreaInput = document.getElementById("textAreaInput");
export const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
  matchBrackets: true,
  mode: "xml",
});