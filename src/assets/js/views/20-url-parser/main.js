import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";

const demoBtn = document.getElementById("demoBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");
const selectTheme = document.getElementById("selectTheme");

const urlInput = document.getElementById('urlInput');
const urlOutput = document.getElementById('output');

const demo = 'https://localhost:8000?public=all&key=2/#other/params';

const textAreaInputEditor = CodeMirror.fromTextArea(urlInput, {
  lineWrapping: true,
  lineNumbers: true,
  lineLength: 80,
  matchBrackets: true,
  mode: "text/plain",
  theme: storage('editor_theme') ?? 'dracula',
});

textAreaInputEditor.on('change',parseUrl);

selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme',val);
  textAreaInputEditor.setOption('theme',val);
})

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue(demo);
  parseUrl(urlInput);
},false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt,textAreaInputEditor.getValue());
},false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue("");
},false);


function parseUrl(evt) {
    try {
      const url = new URL(textAreaInputEditor.getValue());
      const protocol = url.protocol;
      const host = url.hostname;
      const pathname = url.pathname;
      const port = url.port;
      const hash = url.hash;
      const queryString = url.search;

      urlOutput.innerHTML = `<li><span class="key">Protocol:</span> <span class="value">${protocol}</span></li>`;
      urlOutput.innerHTML += `<li><span class="key">Host:</span> <span class="value">${host}</span></li>`;
      urlOutput.innerHTML += `<li><span class="key">Pathname:</span> <span class="value">${pathname}</span></li>`;
      urlOutput.innerHTML += `<li><span class="key">Port:</span> <span class="value">${port}</span></li>`;
      urlOutput.innerHTML += `<li><span class="key">Hash:</span> <span class="value">${hash}</span></li>`;
      urlOutput.innerHTML += `<li><span class="key">Query String:</span> <span class="value">${queryString}</span></li>`;
    } catch (error) {
      urlOutput.innerHTML = `<span style="color: red;">Error parsing URL: ${error.message}</span>`;
    }
  }