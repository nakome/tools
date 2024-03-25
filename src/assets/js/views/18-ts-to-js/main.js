import storage from "../../../js/modules/storage.js";
import transformToHtml from "./controllers/transformToHtml.js";

import {
  convertToCss,
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

textAreaInputEditor.setValue(demo);
transformToHtml();

convertToCss.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaOutputEditor.setValue('🛸 Reciving data...');
  let w = setTimeout(() => {
    transformToHtml();
    clearTimeout(w);
  }, 800);
})

