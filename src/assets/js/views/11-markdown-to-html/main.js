import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";

const demoBtn = document.getElementById("demoBtn");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const selectTheme = document.getElementById("selectTheme");

const textAreaInput = document.getElementById("textAreaInput");
const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "markdown",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
});

const textAreaOutput = document.getElementById("textAreaOutput");
const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
  mode: "htmlmixed",
  theme: storage('editor_theme') ?? 'dracula',
  lineNumbers: true,
  lineWrapping: true,
  readOnly: true,
});


selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme',val);
  textAreaInputEditor.setOption('theme',val);
  textAreaOutputEditor.setOption('theme',val);
});


let demo = `| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
`;

textAreaInputEditor.on("change", transformToHtml);
transformToHtml();

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
  textAreaInputEditor.setValue('');
},false);


/**
 * Transform markdown to html
 */
function transformToHtml() {
  try {
    let options = {
      indent_size: "2"
    };
    const sanitizedContent = html_beautify(DOMPurify.sanitize(marked.parse(textAreaInputEditor.getValue()),options));
    textAreaOutputEditor.setValue(sanitizedContent);
  } catch (error) {
    textAreaOutputEditor.setValue(`Error sanitizing HTML: ${error.message}`);
  }
}