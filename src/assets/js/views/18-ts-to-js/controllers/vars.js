import storage from "../../../modules/storage.js";

export const convertToCss = document.getElementById("convertToCss");
export const textAreaInput = document.getElementById("textAreaInput");
export const textAreaOutput = document.getElementById("textAreaOutput");
export const selectTheme = document.getElementById("selectTheme");
export const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
    mode: "text/typescript",
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    matchBrackets: true,
    lineWrapping: true
});
export const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
    mode: "javascript",
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true,
});
export const demo = `interface User {
    id: number
    firstName: string
    lastName: string
    role: string
  }
  function updateUser(id: number, update: Partial<User>) {
    const user = getUser(id)
    const newUser = { ...user, ...update }
    saveUser(id, newUser)
  }`;
