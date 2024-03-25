import handleCreatePlaceholder from "./controllers/handleCreatePlaceholder.js";
import handleSaveToWebp from "./controllers/handleSaveToWebp.js";

import {
    inputBackground,
    outputBackground,
    inputColor,
    btnGenerate,
    saveToWebp
} from "./controllers/vars.js";

inputBackground.addEventListener('change', evt => {
    outputBackground.textContent = evt.currentTarget.value;
}, false);

inputColor.addEventListener('change', evt => {
    outputColor.textContent = evt.currentTarget.value;
}, false);

btnGenerate.addEventListener('click', handleCreatePlaceholder, false);
saveToWebp.addEventListener('click', handleSaveToWebp, false);