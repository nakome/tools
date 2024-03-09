/**
 * Copies the given text to the clipboard when triggered by the provided event.
 *
 * @param {Event} evt - the event triggering the clipboard copy
 * @param {string} text - the text to be copied to the clipboard
 * @return {boolean} returns false after completing the clipboard copy operation
 */
export default function copyToClipboard(evt, text) {
    evt.preventDefault();
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                evt.target.textContent = "✅ Copied";
                setTimeout(() => {
                    evt.target.textContent = "📋 Copy";
                }, 1000);
            })
            .catch((err) => {
                console.error("Error copying code: ", err);
            });
    } else {
        // Fallback for browsers that don't support navigator.clipboard
        const readOnlyTextArea = document.createElement('textarea');
        readOnlyTextArea.value = text;

        readOnlyTextArea.setAttribute('readonly', true);
        readOnlyTextArea.style.position = 'absolute';
        readOnlyTextArea.style.left = '-9001px';

        document.body.appendChild(readOnlyTextArea);

        readOnlyTextArea.select();
        document.execCommand('copy');

        document.body.removeChild(readOnlyTextArea);

        evt.target.textContent = "✅ Copied";
        setTimeout(() => {
            evt.target.textContent = "📋 Copy";
        }, 1000);
    }
    return false;
}
