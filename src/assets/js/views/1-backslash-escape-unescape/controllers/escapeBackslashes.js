import { textAreaUnescaped } from "./vars.js";

/**
 * Replaces backslashes with escaped backslashes in the given element's value and updates the unescaped text area with the escaped text.
 *
 * @param {type} elem - description of parameter
 * @return {type} undefined
 */
export default function escapeBackslashes(elem) {
    const text = elem.value;
    const escapedText = text.replace(/\\/g, "\\\\");
    textAreaUnescaped.value = escapedText;
}
