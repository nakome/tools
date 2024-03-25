import storage from "../../../modules/storage.js";

export const copyBtn = document.getElementById("copyBtn");
export const resetBtn = document.getElementById("resetBtn");
export const demoBtn = document.getElementById("demoBtn");
export const selectTheme = document.getElementById("selectTheme");
export const textAreaText = document.getElementById("textAreaText");
export const textAreaJson = document.getElementById("textAreaJson");
export const textAreaJsonEditor = CodeMirror.fromTextArea(textAreaJson, {
  mode: { name: "javascript", json: true },
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true
});
export const demo = `{"name": "John", "age": 30, "car": null}`;