import formatCode from "../../../javascript/modules/formatCode.js";
import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

const copyBtn = document.getElementById("copyBtn");
const convertToCss = document.getElementById("convertToCss");

const textAreaInput = document.getElementById("textAreaInput");
const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "css",
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
});

const textAreaOutput = document.getElementById("textAreaOutput");
const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "sass",
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
});

let demo = `@mixin theme($theme: DarkGray) {
    background: $theme;
    box-shadow: 0 0 1px rgba($theme, .25);
    color: #fff;
}
.info {
    @include theme;
}
.alert {
    @include theme($theme: DarkRed);
}
.success {
    @include theme($theme: DarkGreen);
}`;

textAreaInputEditor.setValue(demo);
textAreaOutputEditor.setValue('🛸 Reciving data...');
transformToHtml();

convertToCss.addEventListener('click',evt => {
    evt.preventDefault();
    textAreaOutputEditor.setValue('🛸 Reciving data...');
    let w = setTimeout(() => {
        transformToHtml();
        clearTimeout(w);
    },800);
},false);

copyBtn.addEventListener('click', evt => copyToClipboard(evt,textAreaOutputEditor.getValue()),false);

/**
 * Transform markdown to html
 */
async function transformToHtml() {
  try {
    let baseUrl = "https://agasallo-1-e1977709.deta.app";
    const ScssToCss = async (content) => await formatCode(baseUrl + "/api/convert/to/scss", {
      css_code: content,
    });
    textAreaOutputEditor.setValue(await ScssToCss(textAreaInputEditor.getValue()));
  } catch (error) {
    textAreaOutputEditor.setValue(`Error sanitizing HTML: ${error.message}`);
  }
}