import handleTextInspector from "./controllers/handleTextInspector.js";
import { textAreaInput, demoBtn, resetBtn } from "./controllers/vars.js";

handleTextInspector(textAreaInput.value);

textAreaInput.addEventListener('input', evt => handleTextInspector(evt.currentTarget.value));

demoBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInput.value = 'Hello World this is a example content';
    handleTextInspector(textAreaInput.value);
}, false);

resetBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInput.value = '';
}, false);

