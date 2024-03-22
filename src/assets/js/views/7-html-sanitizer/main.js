import formatHtmlCode from "../../../js/modules/formatHtmlCode.js";
import sanitizeHtml from "../../../js/modules/sanitizeHtml.js";
import capitalize from "../../../js/modules/capitalize.js";
import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../modules/storage.js";

const outputTitle = document.getElementById("outputTitle");
const selectMode = document.getElementById("selectMode");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const demoBtn = document.getElementById("demoBtn");
const selectTheme = document.getElementById("selectTheme");

const textAreaInput = document.getElementById("textAreaInput");
const textAreaOutput = document.getElementById("textAreaOutput");

const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "htmlmixed",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: { nonEmpty: true }
});

const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "htmlmixed",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
  styleActiveLine: { nonEmpty: true }
});

selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme',val);
  textAreaInputEditor.setOption('theme',val);
  textAreaOutputEditor.setOption('theme',val);
})


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