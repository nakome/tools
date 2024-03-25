import storage from "../../../modules/storage.js";

export const outputTitle = document.getElementById("outputTitle");
export const selectMode = document.getElementById("selectMode");
export const copyBtn = document.getElementById("copyBtn");
export const resetBtn = document.getElementById("resetBtn");
export const demoBtn = document.getElementById("demoBtn");
export const selectTheme = document.getElementById("selectTheme");

export const textAreaInput = document.getElementById("textAreaInput");
export const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "htmlmixed",
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


export const demo = `<style rel="stylesheet">
/** Esto es un comentario */
body{
	background:red;
    color:blue;
}
</style>

<!-- comment -->
<div class="test">
  <p>hello</p>
</div>
<!-- /comment -->

<script rel="javascript">
// Esto es un comentario
const main = evt => {
	let hola = 'hola';
}
</script>`;