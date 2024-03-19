import {
  editors,
  saveHtmlCode,
  createNewSnippet,
  renderCode,
  settingsNew,
  preloader,
  toggleView,
  chooseLanguageHtml
} from "./controllers/defaultVars.js";
import toggleFullPreview from "../../modules/toggleFullPreview.js";
import storage from "../../modules/storage.js";

import handleToggleBlock from "./controllers/handleToggleBlock.js";
import handlePostMessage from "./controllers/handlePostMessage.js";
import handleOpenSettings from "./controllers/handleOpenSettings.js";
import handleFormatCode from "./controllers/handleFormatCode.js";
import handlePreviewCode from "./controllers/handlePreviewCode.js";
import handleCreateNew from "./controllers/handleCreateNew.js";
import handleSaveToFile from "./controllers/handleSaveToFile.js";
import handleToggleFullPreview from "./controllers/handleToggleFullPreview.js";

// Add event listeners to the buttons
[...document.querySelectorAll("[id^='split-v-']")].forEach((e, i) => {
  const buttons = e.querySelectorAll(".btn");
  buttons[0].addEventListener("click", (evt) => handleFormatCode(evt, i));
  buttons[1].addEventListener("click", (evt) => handleToggleBlock(evt, i));
});

// Set the initial values
if(storage("editor_html_type")) chooseLanguageHtml.value = storage("editor_html_type");
if(storage("editor_html")) editors[0].setValue(storage("editor_html"));
if(storage("editor_html")) editors[0].setValue(storage("editor_html"));
if(storage("editor_css")) editors[1].setValue(storage("editor_css"));
if(storage("editor_js")) editors[2].setValue(storage("editor_js"));

document.body.addEventListener("keydown", handlePostMessage);
saveHtmlCode.addEventListener("click", handleSaveToFile);
createNewSnippet.addEventListener("click", handleCreateNew);
renderCode.addEventListener("click", handlePreviewCode);
settingsNew.addEventListener("click", handleOpenSettings);
toggleView.addEventListener("click", handleToggleFullPreview);

// If detect mobile device toggle the view
if (navigator.userAgent.toLowerCase().match(/mobile/i)) toggleFullPreview();


/**
 * Executes when the document state changes.
 *
 * @param {} - No parameters
 * @return {} - No return value
 */
document.onreadystatechange = () => {
  if (document.readyState === "complete") {
    console.log('ready?')
    preloader.style.display = "none";
  }
};
