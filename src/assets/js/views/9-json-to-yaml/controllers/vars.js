import storage from "../../../modules/storage.js";

export const textAreaInput = document.getElementById("textAreaInput");
export const textAreaOutput = document.getElementById("textAreaOutput");
export const copyBtn = document.getElementById("copyBtn");
export const resetBtn = document.getElementById("resetBtn");
export const demoBtn = document.getElementById("demoBtn");
export const selectTheme = document.getElementById("selectTheme");
export const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
    mode: { name: "javascript", json: true },
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true
});
export const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
    mode: "yaml",
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true
});