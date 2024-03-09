import minifyHtml from './minifyHtml.js';

/**
 * Format code depending on the selected mode
 * @param {HTMLFormElement} elem
 */
export default function formatHtmlCode(type, inp, out,DOMPurify) {
    if (type.value === "minify") {
        out.setValue(DOMPurify ? minifyHtml(DOMPurify.sanitize(inp.getValue())) : minifyHtml(inp.getValue()));
    } else if (type.value === "beautify") {
        let options = {
            indent_size: "2"
        };

        let outputHtml = inp.getValue()
            .replace(/<\s*script[^>]*>([\s\S]*?)<\/script>/g, (match, content) => {
                return '<script rel="javascript">' + js_beautify(content) + '</script>';
            })
            .replace(/<\s*style[^>]*>([\s\S]*?)<\/style>/g, (match, content) => {
                return '<style rel="stylesheet">' + css_beautify(content) + '</style>';
            });
        out.setValue(
            html_beautify(DOMPurify ? DOMPurify.sanitize(outputHtml) : outputHtml, options)
        );
    }
}
