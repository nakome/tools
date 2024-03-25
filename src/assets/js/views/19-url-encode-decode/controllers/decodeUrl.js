import { textAreaEncoded } from './vars.js';

/**
 * Decodes a URL and outputs the results in an HTML list
 * @param {EvtTarget} evt
 */
export default function decodeUrl(evt) {
    try {
        const decodedUrl = decodeURIComponent(evt.value);
        textAreaEncoded.value = `Decoded URL: ${decodedUrl}`;
    } catch (error) {
        textAreaEncoded.value = `Error decoding URL: ${error.message}`;
    }
}
