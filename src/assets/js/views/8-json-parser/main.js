import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";
import testJsonOutput from "./controllers/testJsonOutput.js";
import {
  copyBtn,
  resetBtn,
  demoBtn,
  selectTheme,
  textAreaText,
  demo,
  textAreaJsonEditor
} from "./controllers/vars.js";

selectTheme.addEventListener("change", evt => {
  let val = evt.currentTarget.value;
  storage('editor_theme', val);
  textAreaJsonEditor.setOption('theme', val);
});

textAreaText.value = demo;
testJsonOutput(textAreaText)

textAreaText.addEventListener("input", (evt) => testJsonOutput(evt.currentTarget));

demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaText.value = demo;
  testJsonOutput(textAreaText);
}, false);

copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, textAreaJsonEditor.getValue());
}, false);

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaText.value = "";
}, false);
