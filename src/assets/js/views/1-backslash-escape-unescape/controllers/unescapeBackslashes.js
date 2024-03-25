import { textAreaEscaped } from "./vars.js"

/**
 * Replaces double backslashes with single backslashes in the given element's value.
 *
 * @param {elem} paramName - the element whose value will be unescaped
 * @return {string} the unescaped text
 */
export default function unescapeBackslashes(elem) {
    const text = elem.value;
    const unescapedText = text.replace(/\\\\/g, "\\");
    textAreaEscaped.value = unescapedText;
}
