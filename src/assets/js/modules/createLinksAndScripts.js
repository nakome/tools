import createElement from "./createElement.js";
import decodeUnicode from "./decodeUnicode.js";

/**
 * Create links and scripts based on the provided data.
 *
 * @param {Object} t - The input data containing links and scripts
 * @return {void}
 */
export default function createLinksAndScripts(t) {
  const data = JSON.parse(decodeUnicode(t.body.links));
  if (data.css && data.css.length > 0) {
    data.css.forEach((cssLink) => {
      createElement("link", document.head, {
        rel: "stylesheet",
        href: cssLink,
      });
    });
  }
  if (data.js && data.js.length > 0) {
    let scripts = "";
    data.js.forEach((jsLink) => {
      scripts = createElement("script", document.body, {
        src: jsLink,
      });
    });
    scripts.onload = () => {
      createElement("script", document.body, {
        type: "module",
        textContent: decodeUnicode(t.body.js),
      });
    };
  } else {
    createElement("script", document.body, {
      type: "module",
      textContent: decodeUnicode(t.body.js),
    });
  }
}
