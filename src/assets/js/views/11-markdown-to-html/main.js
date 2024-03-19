import copyToClipboard from "../../../js/modules/copyToClipboard.js";

const demoBtn = document.getElementById("demoBtn");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");

const textAreaInput = document.getElementById("textAreaInput");
const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  mode: "markdown",
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

let demo = `| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
`;

textAreaInputEditor.setValue(demo);
transformToHtml();

textAreaInputEditor.on("change", transformToHtml);

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