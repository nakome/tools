/**
 * Sanitize HTML and update the output
 */
export default function sanitizeHtml(inp, out) {
    try {
        const sanitizedContent = html_beautify(DOMPurify.sanitize(inp.getValue()));
        out.setValue(sanitizedContent);
    } catch (error) {
        out.setValue(`Error sanitizing HTML: ${error.message}`);
    }
}