import message from "./message.js";
import storage from "./storage.js";
import encodeUnicode from "./encodeUnicode.js";
import {
  editors,
  output,
  chooseLanguageHtml,
} from "../../js/views/0-html-editor/controllers/vars.js";
import formatCode from "./formatCode.js";

let baseUrl = "https://agasallo-1-e1977709.deta.app";

const MarkdownToHtml = async (content) =>
  await formatCode(baseUrl + "/api/convert/to/md", {
    html_code: content,
  });

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

  // Send post message to iframe
  output.postMessage(
    JSON.stringify({
      body: {
        content: encodeUnicode(
          chooseLanguageHtml.value === "html"
            ? editors[0].getValue()
            : await MarkdownToHtml(editors[0].getValue())
        ),
        css: encodeUnicode(editors[1].getValue()),
        js: encodeUnicode(editors[2].getValue()),
        links: encodeUnicode(JSON.stringify(saveLinks)),
      },
    }),
    "*"
  );
}
