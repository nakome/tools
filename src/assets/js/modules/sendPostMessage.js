import message from "./message.js";
import storage from "./storage.js";
import encodeUnicode from "./encodeUnicode.js";
import {
  editors,
  output,
  chooseLanguageHtml,
} from "../../js/views/0-html-editor/controllers/vars.js";

/**
 * Sends a post message with content, css, js, and links to the output.
 *
 * @param {} - no parameters
 * @return {} - no return value
 */
export default async function sendPostMessage() {
  // Send msg
  message("Sending code...");
  // Store on localStorage
  storage("editor_html_type", chooseLanguageHtml.value);
  storage("editor_html", editors[0].getValue());
  storage("editor_css", editors[1].getValue());
  storage("editor_js", editors[2].getValue());
  // Get links
  let saveLinks = storage("editor_links") ?? {};

  let mdContent = '';
  let mdParse = '';
  if(chooseLanguageHtml.value !== "html") {
    mdContent = editors[0].getValue().replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "");
    mdParse = marked.parse(mdContent);
  }

  // Send post message to iframe
  output.postMessage(
    JSON.stringify({
      body: {
        content: encodeUnicode(
          chooseLanguageHtml.value === "html"
            ? editors[0].getValue()
            : mdParse
        ),
        css: encodeUnicode(editors[1].getValue()),
        js: encodeUnicode(editors[2].getValue()),
        links: encodeUnicode(JSON.stringify(saveLinks)),
      },
    }),
    "*"
  );
}
