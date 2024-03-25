import storage from "../../../modules/storage.js";

export const outputTitle = document.getElementById("outputTitle");
export const selectMode = document.getElementById("selectMode");
export const copyBtn = document.getElementById("copyBtn");
export const resetBtn = document.getElementById("resetBtn");
export const demoBtn = document.getElementById("demoBtn");
export const selectTheme = document.getElementById("selectTheme");
export const textAreaInput = document.getElementById("textAreaInput");
export const textAreaOutput = document.getElementById("textAreaOutput");
export const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "htmlmixed",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  styleActiveLine: { nonEmpty: true }
});
export const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "htmlmixed",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
  styleActiveLine: { nonEmpty: true }
});
export const demo = `<img src='javascript:while(1){}'>
<a href=data:,evilnastystuff>clickme</a>
<a href="#some-code-here" id="location">invisible
<div onclick=alert(0)><form onsubmit=alert(1)><input onfocus=alert(2) name=parentNode>123</form></div>`;
