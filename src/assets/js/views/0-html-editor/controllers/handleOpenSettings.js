import createModalWindow from "../../../modules/createModalWindow.js";
import sendPostMessage from "../../../modules/sendPostMessage.js";
import storage from "../../../modules/storage.js";

let settingsModal = null;

/**
 * Function to handle settings form submission and modal creation.
 *
 * @param {Event} evt - The event object for form submission
 * @return {void} No return value
 */
export default function handleOpenSettings(evt) {
  evt.preventDefault();

  let html = `<div class="options">
      <div class="option">
        <label for="meta-head">Stuff for &lt;head&gt; ( output only )</label>
        <textarea name="meta-head" id="meta-head" placeholder="Add &lt;meta&gt; &lt;link&gt; &lt;script&gt; here."></textarea>
      </div>
      <div class="option">
        <label for="css-links">CSS links</label>
        <textarea name="css-links" id="css-links" placeholder="Add CSS links here separated by line."></textarea>
      </div>
      <div class="option">
        <label for="javascript-links">Javascript links</label>
        <textarea name="javascript-links" id="javascript-links" placeholder="Add Javascript links here separated by line."></textarea>
      </div>
      <div class="option">
        <button id="save-settings" class="btn">💾 Save Settings</button>
      </div>
    </div>`;

  settingsModal = createModalWindow({
    title: "Options",
    html: html,
    width: "50%",
    height: "65%",
    oncreate: () => oncreateFn(),
  });
}

function oncreateFn() {
  const metaTags = document.getElementById("meta-head");
  const cssTextarea = document.getElementById("css-links");
  const jsTextarea = document.getElementById("javascript-links");

  const links = storage("editor_links");
  if (links) {
    const { meta, css, js } = links;
    cssTextarea.value += css.join("\n");
    jsTextarea.value += js.join("\n");
    metaTags.value = meta;
  }

  let btnSaveOptions = document.getElementById("save-settings");
  btnSaveOptions.addEventListener("click", (evt) => {
    const cssLinks = cssTextarea.value
      .split("\n")
      .filter((link) => link.trim() !== "");
    const jsLinks = jsTextarea.value
      .split("\n")
      .filter((link) => link.trim() !== "");

    storage("editor_links", {
      meta: metaTags.value,
      css: cssLinks,
      js: jsLinks,
    });

    sendPostMessage();

    settingsModal.close();
  });
}
