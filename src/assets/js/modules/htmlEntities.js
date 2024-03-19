/**
 * Convert special characters in the input text to HTML entities.
 *
 * @param {string} text - The input text to be converted
 * @return {string} The converted text with HTML entities
 */
export default function htmlEntities(text) {
    const temp = document.createElement('div');
    temp.textContent = text;
    return temp.innerHTML;
}