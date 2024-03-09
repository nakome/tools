import formatHtmlCode from "../../../javascript/modules/formatHtmlCode.js";
import capitalize from "../../../javascript/modules/capitalize.js";
import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

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
});

const textAreaOutput = document.getElementById("textAreaOutput");
const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "htmlmixed",
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
});

let demo = `<style rel="stylesheet">
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

textAreaInputEditor.setValue(demo);
formatHtmlCode(selectMode,textAreaInputEditor,textAreaOutputEditor,false);

selectMode.addEventListener("change", (evt) => {
  outputTitle.innerText = "Output: " + capitalize(evt.currentTarget.value);
  formatHtmlCode(evt.currentTarget,textAreaInputEditor,textAreaOutputEditor,false);
},false);

textAreaInputEditor.on('change',() => formatHtmlCode(selectMode,textAreaInputEditor,textAreaOutputEditor,false));

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue(demo);
},false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt,textAreaOutputEditor.getValue());
},false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue("");
},false);