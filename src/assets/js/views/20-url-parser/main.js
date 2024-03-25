
import {
  demoBtn,
  resetBtn,
  copyBtn,
  selectTheme,
  urlInput,
  demo,
  textAreaInputEditor
} from "./controllers/vars.js";

import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";
import parseUrl from "./controllers/parseUrl.js";

textAreaInputEditor.on('change', parseUrl);

selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme', val);
  textAreaInputEditor.setOption('theme', val);
}, false);

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue(demo);
  parseUrl(urlInput);
}, false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, textAreaInputEditor.getValue());
}, false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue("");
}, false);