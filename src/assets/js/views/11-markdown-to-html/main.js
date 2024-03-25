import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";
import transformToHtml from "./controllers/transformToHtml.js";

import {
  demoBtn,
  copyBtn,
  resetBtn,
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
});

textAreaInputEditor.on("change", transformToHtml);
transformToHtml();

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue(demo);
}, false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, textAreaOutputEditor.getValue());
}, false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaInputEditor.setValue('');
}, false);


