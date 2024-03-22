// vars
const _ = elem => document.querySelector(elem);
const thumbnail = _('.thumbnail img');
const imgInput = _('#image-input');
const canvas = _('#cs');
const result = _('.result');
const fake = _('#fake');
const preview = _('.preview');
const appContent = _('.app-content');

let x = '';
let y = '';

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
    useCanvas(canvas, thumbnail, function () {
        let ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.willReadFrequently = true;
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


// canvas function
function useCanvas(el, image, callback) {
    el.width = image.width; // img width
    el.height = image.height; // img height
    let ctx = el.getContext('2d');
    ctx.drawImage(image, 0, 0, image.width, image.height);
    ctx.imageSmoothingEnabled = true;
    ctx.willReadFrequently = true;
    return callback();
}

// convert rgba to hex
// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function findPos(obj) {
    let x = 0, y = 0;
    if (obj.offsetParent) {
        do {
            x += obj.offsetLeft;
            y += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: x, y: y };
    }
    return undefined;
}

(() => {
    const imgInput = _("#image-input");
    const imgContainer = _("#image-display");
    const database = window.localStorage;
    const localStorageSize = 4 * 1024 * 1024;

    // update image
    const updateUi = () => {
        let t2 = setTimeout(() => {
            imgContainer.src = database.getItem("extract-colors-image");
            clearTimeout(t2);
        }, 200);
    };

    // Check image size
    const checkImageSize = (dataURI) => {
        const dataSize = dataURI.length * 0.75;
        console.log(parseInt(dataSize),parseInt(localStorageSize));
        if (parseInt(dataSize) > parseInt(localStorageSize)) {
            alert("The size of the image exceeds the local storage quota.");
            return false;
        }
        return true;
    };

    // handle image change
    const handleImageChange = () => {
        if (imgInput.files.length) {
            let reader = new FileReader();
            reader.onload = (e) => {
                const dataURI = e.target.result;
                if (checkImageSize(dataURI)) {
                    database.setItem("extract-colors-image", dataURI);
                    updateUi();
                }
            };
            reader.readAsDataURL(imgInput.files[0]);
        }
    };

    // init
    const init = () => {
        const demo = _('#image-display').getAttribute('src');
        if (!database.getItem("extract-colors-image")) {
            let t = setTimeout(() => {
                database.setItem("extract-colors-image", demo);
                clearTimeout(t);
            }, 100);
        }
        updateUi();
        imgInput.addEventListener("change", handleImageChange, false);
    };

    init();
})();
