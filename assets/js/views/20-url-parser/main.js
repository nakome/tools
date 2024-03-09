import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

const demoBtn = document.getElementById("demoBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const urlInput = document.getElementById('urlInput');
const urlOutput = document.getElementById('output');

const demo = 'https://localhost:8000?public=all&key=2/#other/params';

urlInput.addEventListener('input',evt => parseUrl(evt.currentTarget));

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  urlInput.value = demo
  parseUrl(urlInput);
},false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt,urlInput.value);
},false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  urlInput.value = '';
},false);

/**
 * Parses a URL and outputs the results in an HTML list
 * @param {EventTarget} evt
 */
function parseUrl(evt) {
    try {
      const url = new URL(evt.value);
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