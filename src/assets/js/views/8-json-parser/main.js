import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";

const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const demoBtn = document.getElementById("demoBtn");
const selectTheme = document.getElementById("selectTheme");

const textAreaText = document.getElementById("textAreaText");
const textAreaJson = document.getElementById("textAreaJson");
const textAreaJsonEditor = CodeMirror.fromTextArea(textAreaJson, {
  mode: { name: "javascript", json: true },
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true
});

selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme',val);
  textAreaJsonEditor.setOption('theme',val);
});

let demo = `{"name": "John", "age": 30, "car": null}`;
textAreaText.value = demo;
testJsonOutput(textAreaText)

textAreaText.addEventListener("input", (evt) => testJsonOutput(evt.currentTarget));

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaText.value = demo;
  testJsonOutput(textAreaText);
},false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, textAreaJsonEditor.getValue());
},false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaText.value = "";
},false);

function testJsonOutput(evt) {
  try {
    let output = JSON.parse(evt.value);
    textAreaJsonEditor.setValue(JSON.stringify(output, null, 2));
  } catch (error) {
    textAreaJsonEditor.setValue("Error, " + error);
  };
}