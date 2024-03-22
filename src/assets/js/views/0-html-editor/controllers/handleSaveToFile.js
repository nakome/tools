import { editors,chooseLanguageHtml } from "./defaultVars.js";
import storage from "../../../modules/storage.js";
import createModalWindow from "../../../modules/createModalWindow.js";
import exportToHTML from '../../../modules/exportToHTML.js';
import generateRandomId from '../../../modules/generateRandomId.js';
import formatCode from "../../../modules/formatCode.js";

const settings = storage('editor_theme') ?? {};

let baseUrl = 'https://agasallo-1-e1977709.deta.app';

const MarkdownToHtml = async (content) => await formatCode(baseUrl + "/api/convert/to/md", {
  html_code: content
});

/**
 * Save the HTML code in a modal window.
 *
 * @return {void}
 */
export default function handleSaveToFile() {

  // Html template
  let html = `<div class="options">
        <div class="option">
          <button type="button" class="btn" id="copy">💾 Copy code</button>
          <button type="button" class="btn" id="export">🗒️ Export html</button>
        </div>
        <div class="option">
          <input type="text" placeholder="Title" id="title" value="My template/>
        </div>
        <div class="option">
            <textarea id="htmlOutput" name="htmlOutput">Working...</textarea>
        </div>
    </div>`;

  // Create modal
  let createModal = createModalWindow({
    id: "save-window",
    // appearance:
    title: "Html output",
    // initial state:
    modal: true,
    width: "60%",
    height: "90%",
    // position:
    x: "center",
    y: "center",
    html: html,
    // callbacks:
    oncreate: () => oncreateFn(),
  });
  //createModal.maximize();
}

/**
 * Function to initialize Codemirror, create links and scripts, create a template,
 * set up event listeners for copy and export buttons, and insert the template in Codemirror.
 */
async function oncreateFn() {

  // Create Codemirror
  const htmlOutput = document.getElementById("htmlOutput");
  const title = document.getElementById("title");
  const editorOutput = CodeMirror.fromTextArea(htmlOutput, {
    lineNumbers: true,
    lineWrapping: true,
    lineLength: 80,
    mode: "htmlmixed",
    theme: settings.theme ?? "dracula",
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    foldGutter: true,
    readOnly:true
  });

  // Create links and scripts
  let linksHref = "";
  let scriptsSrc = "";
  let metaTags = "";
  const links = storage("editor_links");
  if (links) {
    const { meta, css, js } = links;
    linksHref = css.map((item) => `<link rel="stylesheet" href="${item}"/>`);
    scriptsSrc = js.map(
      (item) => `<script rel="javascript" src="${item}"></script>`
    );
    metaTags = meta
  }

  let htmlCodeBlock = html_beautify(editors[0].getValue());
  if(chooseLanguageHtml.value === 'md') {
    htmlCodeBlock = await MarkdownToHtml(editors[0].getValue());
  }

  // Create template
  const data = {
    id: generateRandomId(),
    title: title.value,
    meta: metaTags,
    linksHref: linksHref,
    cssCompressed: editors[1].getValue(),
    content: htmlCodeBlock,
    scriptsSrc: scriptsSrc,
    jsCompressed: editors[2].getValue(),
  };

  const template = generateHtmlTemplate(data);
  const copyBtn = document.querySelector("#copy");
  const exportBtn = document.querySelector("#export");

  // Copy btn
  copyBtn.addEventListener("click", (evt) => {
    evt.target.textContent = "✅ Copied!";
    navigator.clipboard.writeText(editorOutput.getValue());
    let t = setTimeout(() => {
      evt.target.textContent = "💾 Copy code";
      clearTimeout(t);
    },800)
  },false);

  // Export to file
  exportBtn.addEventListener('click',evt => {
    exportToHTML(`${title.value}.html`,template);
  },false);

  //  Insert in CodeMirror
  editorOutput.setValue(template);
}

/**
 * Generates an HTML template using the provided arguments.
 *
 * @param {Object} args - the arguments for generating the HTML template
 * @return {string} the generated HTML template
 */
function generateHtmlTemplate(args) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${args.title}</title>
  ${args.meta}

  <!-- Links -->
  ${args.linksHref}

  <!-- Custom css -->
  <style rel="stylesheet">
${args.cssCompressed}
  </style>
</head>
<body>
  ${args.content}

  <!-- Scripts -->
  ${args.scriptsSrc}

  <!-- Custom js -->
  <script rel="javascript" type="module">
${args.jsCompressed}
  </script>
</body>
</html>`;
}


