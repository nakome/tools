import { maxWidth, maxHeight } from "./controllers/vars.js";

import updateUi from "./controllers/updateUi.js";
import bindUi from "./controllers/bindUid.js";

let database = window.localStorage;
let mw = maxWidth.value || 600;
let mh = maxHeight.value || 300;

database.setItem("webp-converter", "");
maxWidth.addEventListener("change", (evt) => {
    mw = evt.target.value;
    mh = maxHeight.value;
    console.log(mw, mh)
    updateUi(mw, mh);
    bindUi();
});
maxHeight.addEventListener("change", (evt) => {
    mw = maxWidth.value;
    mh = evt.target.value;
    console.log(mw, mh)
    updateUi(mw, mh);
    bindUi();
});

updateUi(mw, mh);
bindUi();