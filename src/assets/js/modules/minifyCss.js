/**
 * Minifies the given CSS by removing unnecessary whitespace and comments.
 *
 * @param {string} css - The CSS to be minified
 * @return {string} The minified CSS
 */
export default function minifyCSS(css) {
    return css
        .replace(/\/\*.*\*\/|\/\*[\s\S]*?\*\/|\n|\t|\v|\s{2,}/g, '')
        .replace(/\s*\{\s*/g, '{')
        .replace(/\s*\}\s*/g, '}')
        .replace(/\s*\:\s*/g, ':')
        .replace(/\s*\;\s*/g, ';')
        .replace(/\s*\,\s*/g, ',')
        .replace(/\s*\~\s*/g, '~')
        .replace(/\s*\>\s*/g, '>')
        .replace(/\s*\+\s*/g, '+')
        .replace(/\s*\!\s*/g, '!')
        .trim();
}