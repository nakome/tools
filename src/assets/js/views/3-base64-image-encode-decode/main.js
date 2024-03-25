import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import ImageManager from "./controllers/ImageManager.js";
import {
    textAreaInput,
    imageDisplay,
    copyBtn
} from "./controllers/vars.js";

copyBtn.addEventListener('click', evt => copyToClipboard(evt, textAreaInput.value));

textAreaInput.addEventListener('paste', evt => {
    let imgData = evt.clipboardData.getData('text');
    imageDisplay.setAttribute('src', imgData);
    imageDisplay.style.display = 'block';
    window.localStorage.setItem("image-base64", imgData);
});

new ImageManager();