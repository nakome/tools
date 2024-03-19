import formatHtmlCode from "../../../js/modules/formatHtmlCode.js";
import sanitizeHtml from "../../../js/modules/sanitizeHtml.js";
import capitalize from "../../../js/modules/capitalize.js";
import copyToClipboard from "../../../js/modules/copyToClipboard.js";

const outputTitle = document.getElementById("outputTitle");
const selectMode = document.getElementById("selectMode");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const demoBtn = document.getElementById("demoBtn");

const textAreaInput = document.getElementById("textAreaInput");
const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "htmlmixed",
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: { nonEmpty: true }
});

const textAreaOutput = document.getElementById("textAreaOutput");
const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "htmlmixed",
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
  styleActiveLine: { nonEmpty: true }
});

const demo = `<img src='javascript:while(1){}'>
<a href=data:,evilnastystuff>clickme</a>
<a href="#some-code-here" id="location">invisible
<div onclick=alert(0)><form onsubmit=alert(1)><input onfocus=alert(2) name=parentNode>123</form></div>`;

textAreaInputEditor.on('change',() => sanitizeHtml(textAreaInputEditor,textAreaOutputEditor));

selectMode.addEventListener("change", (evt) => {
  outputTitle.innerText = "Output: " + capitalize(evt.currentTarget.value);
  formatHtmlCode(evt.currentTarget,textAreaInputEditor,textAreaOutputEditor,DOMPurify);
});

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue(demo);
})

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt,textAreaOutputEditor.getValue())
},false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue("");
});