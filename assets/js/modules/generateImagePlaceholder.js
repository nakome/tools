/**
 * Generates an image placeholder with the specified options.
 *
 * @param {Object} options - An object containing the width, height, background color, text color, text, and text size.
 * @return {Image} The generated image placeholder.
 */
export default function generateImagePlaceholder(options) {
    // Validate options
    const { width, height, backgroundColor, textColor, text, textSize } = options;

    // Create canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // Define size and fill background
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, width, height);

    // Fill text
    context.fillStyle = textColor;
    context.font = `${textSize}px Arial`;
    const textX = width / 2;
    const textY = height / 2;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(text, textX, textY);

    // Font size settings for dimensions
    const dimensionsFontSize = 12;
    context.font = `${dimensionsFontSize}px Arial`;
    const dimensionsText = `${width}x${height}`;
    const dimensionsTextY = textY + textSize / 1.25;
    context.fillText(dimensionsText, textX, dimensionsTextY);

    // Obtener la URL de la imagen generada
    const imageURL = canvas.toDataURL();
    const image = new Image();
    image.src = imageURL;
    return image;
}
