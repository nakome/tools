import textInspector from "../../../modules/textInspector.js";
import htmlEntities from "../../../modules/htmlEntities.js";

import { textOutput } from "./vars.js";

/**
 * Handles the text inspector functionality.
 *
 * @param {string} text - The text to be inspected.
 * @return {undefined} This function does not return a value.
 */
export default function handleTextInspector(text) {
    let str = textInspector(htmlEntities(text));

    let tpl = '';
    for (let word in str.wordDistribution) {
        if (str.wordDistribution.hasOwnProperty(word)) {
            let count = str.wordDistribution[word];
            tpl += `<span><strong>Word:</strong> ${word} <strong>=</strong> ${count}</span>`
        }
    }
    textOutput.innerHTML = `
        <p>Characters: <strong>${str.characters}</strong></p>
        <p>Words: <strong>${str.words}</strong></p>
        <p>Lines: <strong>${str.lines}</strong></p>
        <p>Word Distribution:</p>
        <pre>${tpl}</pre>
    `;
}