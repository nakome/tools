/**
 * Minifies the input JavaScript code by removing comments, unnecessary white spaces, and formatting.
 *
 * @param {string} js - The input JavaScript code to be minified
 * @return {string} The minified JavaScript code
 */
export default function minifyJS(js) {
    return js
        .replace(/\/\*[\s\S]*?\*\/|\/\/.*\n|\s{2,}|\n|\t|\v|\s(?=function\(.*?\))|\s(?=\=)|\s(?=\{)/g, '')
        .replace(/\s?function\s?\(/g, 'function(')
        .replace(/\s?\{\s?/g, '{')
        .replace(/\s?\}\s?/g, '}')
        .replace(/\,\s?/g, ',')
        .replace(/if\s?/g, 'if')
        .trim();
}
