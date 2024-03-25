import { urlOutput, textAreaInputEditor } from './vars.js';

/**
 * Parses a URL and displays its components in an HTML list.
 *
 * @param {Event} evt - The event object triggered by the user.
 * @return {void} This function does not return a value.
 */
export default function parseUrl(evt) {
    try {
        const url = new URL(textAreaInputEditor.getValue());
        const protocol = url.protocol;
        const host = url.hostname;
        const pathname = url.pathname;
        const port = url.port;
        const hash = url.hash;
        const queryString = url.search;

        urlOutput.innerHTML = `<li><span class="key">Protocol:</span> <span class="value">${protocol}</span></li>`;
        urlOutput.innerHTML += `<li><span class="key">Host:</span> <span class="value">${host}</span></li>`;
        urlOutput.innerHTML += `<li><span class="key">Pathname:</span> <span class="value">${pathname}</span></li>`;
        urlOutput.innerHTML += `<li><span class="key">Port:</span> <span class="value">${port}</span></li>`;
        urlOutput.innerHTML += `<li><span class="key">Hash:</span> <span class="value">${hash}</span></li>`;
        urlOutput.innerHTML += `<li><span class="key">Query String:</span> <span class="value">${queryString}</span></li>`;
    } catch (error) {
        urlOutput.innerHTML = `<span style="color: red;">Error parsing URL: ${error.message}</span>`;
    }
}