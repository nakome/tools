import { headerTitle } from "../../js/views/0-html-editor/controllers/defaultVars.js";

/**
 * Updates the title element with the given text and resets it to "Html Editor" after 3 seconds.
 *
 * @param {string} txt - The text to be displayed in the title element.
 * @return {void}
 */
export default function message(txt) {
  headerTitle.textContent = txt;
  setTimeout(() => {
    headerTitle.textContent = "Html Editor";
  }, 3000);
}
