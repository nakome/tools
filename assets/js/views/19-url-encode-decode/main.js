import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

const demoBtn = document.getElementById("demoBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const textAreaEncoded = document.getElementById("textAreaEncoded");
const textAreaDecoded = document.getElementById("textAreaDecoded");

const demo = "https://localhost:8000?public=all&key=2/#other/params";

textAreaEncoded.addEventListener("input", (evt) => encodeUrl(evt.currentTarget));
textAreaDecoded.addEventListener("input", (evt) => decodeUrl(evt.currentTarget));

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEncoded.value = demo
  encodeUrl(textAreaEncoded);
},false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt,textAreaDecoded.value);
},false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEncoded.value = '';
},false);

/**
 * Encodes a URL and outputs the results in an HTML list
 * @param {EventTarget} evt
 */
function encodeUrl(evt) {
  try {
    const encodedUrl = encodeURIComponent(evt.value);
    textAreaDecoded.value = `Encoded URL: ${encodedUrl}`;
  } catch (error) {
    textAreaDecoded.value = `Error encoding URL: ${error.message}`;
  }
}

/**
 * Decodes a URL and outputs the results in an HTML list
 * @param {EvtTarget} evt
 */
function decodeUrl(evt) {
  try {
    const decodedUrl = decodeURIComponent(evt.value);
    textAreaEncoded.value = `Decoded URL: ${decodedUrl}`;
  } catch (error) {
    textAreaEncoded.value = `Error decoding URL: ${error.message}`;
  }
}
