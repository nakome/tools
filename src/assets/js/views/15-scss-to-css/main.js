import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";
import ShowToast from "../../modules/showToast.js";
import transformToHtml from "./controllers/transformToHtml.js";

import {
  demo,
  copyBtn,
  convertToCss,
  selectTheme,
  textAreaInputEditor,
  textAreaOutputEditor
} from "./controllers/vars.js";


selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme', val);
  textAreaInputEditor.setOption('theme', val);
  textAreaOutputEditor.setOption('theme', val);
});

textAreaInputEditor.setValue(demo);
textAreaOutputEditor.setValue('🛸 Reciving data...');
transformToHtml();

convertToCss.addEventListener('click', evt => {
  evt.preventDefault();
  ShowToast("Converting to CSS...");
  textAreaOutputEditor.setValue('🛸 Reciving data...');
  let w = setTimeout(() => {
    transformToHtml();
    clearTimeout(w);
  }, 800);
}, false);

copyBtn.addEventListener('click', evt => copyToClipboard(evt, textAreaOutputEditor.getValue()), false);