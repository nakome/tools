import useCanvas from './controllers/useCanvas.js';
import rgbToHex from './controllers/rgbToHex.js';
import ImageManager from './controllers/ImageManager.js';

import {
    thumbnail,
    imgInput,
    canvas,
    result,
    fake,
    preview,
    appContent
} from './controllers/vars.js';


let x = '';
let y = '';

new ImageManager();

imgInput.addEventListener('change', evt => {
    fake.innerHTML = evt.currentTarget.value.replace('C:\\fakepath\\', '🎞️ - ');
}, false);

// click function
thumbnail.addEventListener('click', function (e) {
    // chrome
    if (e.offsetX) {
        x = e.offsetX;
        y = e.offsetY;
    }
    // firefox
    else if (e.layerX) {
        x = e.layerX;
        y = e.layerY;
    }
    useCanvas(canvas, thumbnail, function (ctx) {
        let p = ctx.getImageData(x, y, 1, 1).data;
        result.innerHTML = `<span>HEX: ${rgbToHex(p[0], p[1], p[2])}</span><span>RGB:  rgb(${p[0]},${p[1]},${p[2]})</span>`;
        appContent.style.background = rgbToHex(p[0], p[1], p[2]);
    });
}, false);

// preview function mousemove
thumbnail.addEventListener('mousemove', function (e) {
    // chrome
    if (e.offsetX) {
        x = e.offsetX;
        y = e.offsetY;
    }
    // firefox
    else if (e.layerX) {
        x = e.layerX;
        y = e.layerY;
    }
    useCanvas(canvas, thumbnail, function () {
        // get image data
        let p = canvas.getContext('2d').getImageData(x, y, 1, 1).data;
        // show preview color
        preview.style.background = rgbToHex(p[0], p[1], p[2]);
    });
}, false);