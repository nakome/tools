import storage from "../../../modules/storage.js";

export const demoBtn = document.getElementById("demoBtn");
export const copyBtn = document.getElementById("copyBtn");
export const resetBtn = document.getElementById("resetBtn");
export const selectTheme = document.getElementById("selectTheme");
export const textAreaInput = document.getElementById("textAreaInput");
export const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "markdown",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
});
export const textAreaOutput = document.getElementById("textAreaOutput");
export const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "htmlmixed",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
});
export const demo = `| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
`;
