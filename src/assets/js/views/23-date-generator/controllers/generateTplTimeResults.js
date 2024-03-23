import generateDateResults from "../../../modules/generateDateResults.js";

/**
 * Generate time results for the given result data.
 *
 * @param {object} result - The result data to generate time results from
 * @return {string} The generated time results as a string
 */
export default function generateTplTimeResults(result) {
    let tpl = "";
    // Get time results
    let data = generateDateResults(result,navigator.language ?? 'en-US');
    for (let key in data) {
        if (data.hasOwnProperty(key)) {
            tpl += `<div class="object"><span class="key">${key}:</span> <span class="value">${data[key]}</span></div>`;
        }
    }
    return tpl;
}