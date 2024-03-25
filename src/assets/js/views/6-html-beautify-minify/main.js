import formatHtmlCode from "../../../js/modules/formatHtmlCode.js";
import capitalize from "../../../js/modules/capitalize.js";
import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../modules/storage.js";
import ShowToast from "../../modules/showToast.js";

import {
  outputTitle,
  selectMode,
  copyBtn,
  resetBtn,
  demoBtn,
  selectTheme,
  textAreaInputEditor,
  textAreaOutputEditor,
  demo
} from "./controllers/vars.js";

selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme', val);
  textAreaInputEditor.setOption('theme', val);
  textAreaOutputEditor.setOption('theme', val);
  ShowToast("Theme changed", 2000);
})

textAreaInputEditor.setValue(demo);
formatHtmlCode(selectMode, textAreaInputEditor, textAreaOutputEditor, false);

selectMode.addEventListener("change", (evt) => {
  outputTitle.innerText = "Output: " + capitalize(evt.currentTarget.value);
  formatHtmlCode(evt.currentTarget, textAreaInputEditor, textAreaOutputEditor, false);
}, false);

textAreaInputEditor.on('change', () => formatHtmlCode(selectMode, textAreaInputEditor, textAreaOutputEditor, false));

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue(demo);
}, false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, textAreaOutputEditor.getValue());
  ShowToast("Copy to clipboard ✅");
}, false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue("");
  ShowToast("Reset data 🗑️",2000);
}, false);