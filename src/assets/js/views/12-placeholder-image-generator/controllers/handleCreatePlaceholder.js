import generateImagePlaceholder from "../../../modules/generateImagePlaceholder.js";
import {
    inputWidth,
    inputHeight,
    inputBackground,
    outputColor,
    outputBackground,
    inputColor,
    inputText,
    textSize,
    output,
} from "./vars.js";

/**
 * Handles the creation of a placeholder image based on user input.
 *
 * @param {Event} evt - the event object triggering the function
 * @return {void}
 */
export default function handleCreatePlaceholder(evt) {
    evt.preventDefault();

    const minWidth = parseInt(inputWidth.min);
    const maxWidth = parseInt(inputWidth.max);
    const minHeight = parseInt(inputHeight.min);
    const maxHeight = parseInt(inputHeight.max);

    // Check the width
    let width = parseInt(inputWidth.value);
    if (width < minWidth) {
        width = minWidth;
    } else if (width > maxWidth) {
        width = maxWidth;
    }

    // Checking the height
    let height = parseInt(inputHeight.value);
    if (height < minHeight) {
        height = minHeight;
    } else if (height > maxHeight) {
        height = maxHeight;
    }

    output.innerHTML = '';
    outputBackground.value = inputBackground.value;
    outputColor.value = inputColor.value;
    const options = {
        width: width,
        height: height,
        backgroundColor: inputBackground.value,
        textColor: inputColor.value,
        text: inputText.value,
        textSize: textSize.value
    }
    const generatedImage = generateImagePlaceholder(options);
    output.appendChild(generatedImage)
}