import { editors,chooseLanguageHtml } from "./vars.js";
import ShowToast from "../../../modules/showToast.js";

/**
 * Formats the code based on the given event and number.
 *
 * @param {Event} evt - the event triggering the code formatting
 * @param {number} num - the number representing the type of code to format (0 for HTML, 1 for CSS, 2 for JavaScript)
 * @return {void}
 */
export default function handleFormatCode(evt, num) {
  evt.preventDefault();
  // Options
  let options = {
    indent_size: "2",
    indent_char: " ",
  };
  // Format code depending on number of id
  let editorValue, beautifiedValue;
  switch (num) {
    case 0:
      editorValue = editors[0].getValue();
      // Check if language is HTML to format
      beautifiedValue = (chooseLanguageHtml.value === "html") ? html_beautify(editorValue, options) : editorValue;
      editors[0].setValue(beautifiedValue);
      ShowToast("Formatting Html code...",1000);
      break;
    case 1:
      editorValue = editors[1].getValue();
      beautifiedValue = css_beautify(editorValue, options);
      editors[1].setValue(beautifiedValue);
      ShowToast("Formatting Style code...",1000);
      break;
    case 2:
      editorValue = editors[2].getValue();
      beautifiedValue = js_beautify(editorValue, options);
      editors[2].setValue(beautifiedValue);
      ShowToast("Formatting Js code...",1000);
      break;
  }
}
