import exportToMd from "../../modules/exportToMd.js";
import storage from "../../modules/storage.js";
import sendPostMessage from "./controllers/sendPostMessage.js";
import toggleFullPreview from "./controllers/toggleFullPreview.js";
import toggleTheme from "./controllers/toggleTheme.js";

import {Editor,toggleView,horizontalSplitView,eyeSlashIcon} from  "./controllers/vars.js";

if (storage("editor_md")) Editor.setValue(storage("editor_md"));

document.body.addEventListener("keydown", evt => (evt.ctrlKey && evt.keyCode === 13) ? sendPostMessage(evt) : false);

saveHtmlCode.addEventListener("click", evt => exportToMd('filename.md', Editor.getValue()));

renderCode.addEventListener("click", evt => {
    renderCode.addEventListener("click", evt => {
        evt.preventDefault();
        sendPostMessage();
        // Hide code on click for mobile
        if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
          toggleView.classList.add('active');
          toggleView.innerHTML = eyeSlashIcon;
          horizontalSplitView.setSizes([0, 100]);
        }
      });
});

toggleView.addEventListener("click", evt => toggleFullPreview());

// Choose theme style
selectTheme.addEventListener("change",toggleTheme, false);

// If detect mobile device toggle the view
if (navigator.userAgent.toLowerCase().match(/mobile/i)) toggleFullPreview();

