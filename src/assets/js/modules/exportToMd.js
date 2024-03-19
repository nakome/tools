/**
 * Exports the content to an HTML file with the given filename.
 *
 * @param {string} filename - The name of the HTML file to be created.
 * @param {string} content - The content to be included in the HTML file.
 */
export default function exportToMd(filename,content) {
    let blob = new Blob([content], { type: 'text/markdown' });
    let url = URL.createObjectURL(blob);
    let a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
}