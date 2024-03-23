import pasteTextHandler from "./controllers/pasteTextHandler.js";
import highlightText from "./controllers/highLightText.js";
import {output, regexInput} from "./controllers/vars.js";

regexInput.addEventListener('input', highlightText);
output.addEventListener('paste', pasteTextHandler);

highlightText();

