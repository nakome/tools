import copyToClipboard from "../../../js/modules/copyToClipboard.js";

import {
  demoBtn,
  resetBtn,
  copyBtn,
  textAreaEncoded,
  textAreaDecoded,
  demo
} from "./controllers/vars.js";

import encodeUrl from "./controllers/encodeUrl.js";
import decodeUrl from "./controllers/decodeUrl.js";

textAreaEncoded.addEventListener("input", (evt) => encodeUrl(evt.currentTarget));
textAreaDecoded.addEventListener("input", (evt) => decodeUrl(evt.currentTarget));

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEncoded.value = demo
  encodeUrl(textAreaEncoded);
}, false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, textAreaDecoded.value);
}, false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEncoded.value = '';
}, false);