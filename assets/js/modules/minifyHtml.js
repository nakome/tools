import minifyJS from './minifyJs.js';
import minifyCss from './minifyCss.js';

/**
 * Minifies the input HTML string by removing comments, unnecessary whitespace, and minifying embedded CSS and JS.
 *
 * @param {string} s - The input HTML string to be minified
 * @return {string} The minified HTML string
 */
export default function minifyHtml(s) {
    return s
        .replace(/\<\!--\s*?[^\s?\[][\s\S]*?--\>/g, '')
        .replace(/\>\s*\</g, '><')
        .replace(/<style[^>]*>[\s\S]*?<\/style>/g, (match) => minifyCss(match))
        .replace(/<script[^>]*>[\s\S]*?<\/script>/g, (match) => minifyJS(match))
        .trim(" ");
}