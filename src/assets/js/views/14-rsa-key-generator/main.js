import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import generateRSAKeyPair from "./controllers/generateRSAKeyPair.js";
import {
    textAreaInput,
    generate,
    copyBtn
} from "./controllers/vars.js";


generate.addEventListener("click", generateRSAKeyPair);
copyBtn.addEventListener('click', evt => copyToClipboard(evt, textAreaInput));

generateRSAKeyPair();

