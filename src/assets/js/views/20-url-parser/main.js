
import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";
import parseUrl from "./controllers/parseUrl.js";
import ShowToast from "../../modules/showToast.js";
import {
  demoBtn,
  resetBtn,
  copyBtn,
  selectTheme,
  urlInput,
  demo,
  textAreaInputEditor
} from "./controllers/vars.js";

textAreaInputEditor.on('change', parseUrl);

selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme', val);
  textAreaInputEditor.setOption('theme', val);
  ShowToast("Theme changed...", 2000);
}, false);

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue(demo);
  parseUrl(urlInput);
}, false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, textAreaInputEditor.getValue());
  ShowToast("Copy to clipboard ✅", 2000);
}, false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue("");
  ShowToast("Reset data 🗑️", 2000);
}, false);