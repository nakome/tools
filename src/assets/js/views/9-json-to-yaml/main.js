import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";
import formatYaml from "./controllers/formatYaml.js";
import {
    copyBtn,
    resetBtn,
    demoBtn,
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

formatYaml();

textAreaInputEditor.on('change', formatYaml);

demoBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInputEditor.setValue('{"ready":true}');
}, false);

copyBtn.addEventListener('click', evt => {
    evt.preventDefault();
    copyToClipboard(evt, textAreaOutputEditor.getValue());
}, false);

resetBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInputEditor.setValue('');
}, false);

