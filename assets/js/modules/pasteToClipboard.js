
/**
 * Function to paste text to clipboard.
 *
 * @param {Event} evt - the event object
 * @param {string} text - the text to be pasted to clipboard
 * @return {void}
 */
export default function pasteToClipboard(evt,text) {
    const clipboardData = evt.clipboardData;
    if (!clipboardData) {
        console.error('Clipboard API not supported.');
        return;
    }
    const pastedText = clipboardData.getData('text');
    text = pastedText;
}