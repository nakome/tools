import storage from "../../../modules/storage.js";

export const demoBtn = document.getElementById("demoBtn");
export const resetBtn = document.getElementById("resetBtn");
export const copyBtn = document.getElementById("copyBtn");
export const selectTheme = document.getElementById("selectTheme");
export const urlInput = document.getElementById('urlInput');
export const urlOutput = document.getElementById('output');
export const demo = 'https://localhost:8000?public=all&key=2/#other/params';
export const textAreaInputEditor = CodeMirror.fromTextArea(urlInput, {
  lineWrapping: true,
  lineNumbers: true,
  lineLength: 80,
  matchBrackets: true,
  mode: "text/plain",
  theme: storage('editor_theme') ?? 'dracula',
});