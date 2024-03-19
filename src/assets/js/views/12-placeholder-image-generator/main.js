import generateImagePlaceholder from "../../../js/modules/generateImagePlaceholder.js";
import downloadImage from "../../../js/modules/downloadImage.js";

const inputWidth = document.getElementById('str-width');
const inputHeight = document.getElementById('str-height');
const inputBackground = document.getElementById('str-background');
const outputColor = document.getElementById('output-color');
const outputBackground = document.getElementById('output-background');
const inputColor = document.getElementById('str-color');
const inputText = document.getElementById('str-text');
const textSize = document.getElementById('str-textSize');
const btnGenerate = document.getElementById('generate');
const output = document.getElementById('output');
const selectType = document.getElementById('selectType');
const saveToWebp = document.getElementById('saveToWebp');

inputBackground.addEventListener('change', evt => {
    outputBackground.textContent = evt.currentTarget.value;
}, false);

inputColor.addEventListener('change', evt => {
    outputColor.textContent = evt.currentTarget.value;
}, false);

btnGenerate.addEventListener('click', handleCreatePlaceholder, false);
saveToWebp.addEventListener('click', handleSaveToWebp, false);

/**
 * Handle saving the image to WebP format.
 *
 * @param {Event} evt - The event object
 * @return {boolean} Indicates if the image was successfully saved
 */
function handleSaveToWebp(evt) {
    evt.preventDefault();
    let type = selectType.value || 'png';
    if (output.firstChild.src) {
        downloadImage(output.firstChild.src, type);
    }
    return false;
}

/**
 * Handles the creation of a placeholder image based on user input.
 *
 * @param {Event} evt - the event object triggering the function
 * @return {void}
 */
function handleCreatePlaceholder(evt) {
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