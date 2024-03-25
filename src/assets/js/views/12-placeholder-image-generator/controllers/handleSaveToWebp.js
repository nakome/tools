import downloadImage from "../../../modules/downloadImage.js";

import {
    output,
    selectType
} from "./vars.js";

/**
 * Handle saving the image to WebP format.
 *
 * @param {Event} evt - The event object
 * @return {boolean} Indicates if the image was successfully saved
 */
export default function handleSaveToWebp(evt) {
    evt.preventDefault();
    let type = selectType.value || 'png';
    if (output.firstChild.src) {
        downloadImage(output.firstChild.src, type);
    }
    return false;
}