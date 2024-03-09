/**
 * Downloads an image from the specified URL in the given format.
 *
 * @param {string} imageUrl - the URL of the image to download
 * @param {string} format - the format in which the image should be downloaded
 * @return {void}
 */
export default function downloadImage(imageUrl, format) {
    // Create a new canvas
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    // Create a new image
    const img = new Image();
    // Allow cross-origin images
    img.crossOrigin = 'anonymous';
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        context.drawImage(img, 0, 0, img.width, img.height);
        // Convert to blob
        canvas.toBlob(function (blob) {
            // Create a download link
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            // Set the name of the file
            const fileName = `downloaded_image.${format}`;
            link.download = fileName;
            // Simulate click on the download link
            link.click();
            // Liberate the resource of the blob
            URL.revokeObjectURL(link.href);
        }, `image/${format}`);
    };
    img.src = imageUrl;
}