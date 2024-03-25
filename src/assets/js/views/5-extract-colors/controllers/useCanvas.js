// canvas function
export default function useCanvas(el, image, callback) {
    el.width = image.width; // img width
    el.height = image.height; // img height
    let ctx = el.getContext('2d');
    ctx.willReadFrequently = true;
    ctx.imageSmoothingEnabled = true;
    ctx.drawImage(image, 0, 0, image.width, image.height);
    return callback(ctx);
}

