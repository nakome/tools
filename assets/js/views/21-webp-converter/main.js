const imageDisplay = document.getElementById("image-display");
const imageWebp = document.getElementById("image-webp");
const saveToWebp = document.getElementById("saveToWebp");
const output = document.getElementById("output");
const size = document.getElementById("size");
const imgInput = document.getElementById("image-input");

const maxWidth = document.getElementById("minWidth");
const maxHeight = document.getElementById("minHeight");

(() => {
    const database = window.localStorage;
    const localStorageSize = 4 * 1024 * 1024; // 4 MB
    const mw = maxWidth.value || 600;
    const mh = maxHeight.value || 300;

    database.setItem("webp-converter", "");

    maxWidth.addEventListener("change", () => {
        updateUi();
        bindUi();
    });
    maxHeight.addEventListener("change", () => {
        updateUi();
        bindUi();
    });

    const updateUi = () => {
        const demo = imageDisplay.getAttribute("src");
        const t2 = setTimeout(() => {
            imageDisplay.src = database.getItem("webp-converter") || demo;
            imageDisplay.style.display = "block";
            database.getItem("webp-converter") &&
                convertDataUriToWebP(database.getItem("webp-converter"), mw, mh);
            clearTimeout(t2);
        }, 200);
    };

    const checkImageSize = (dataURI) => {
        const dataSize = dataURI.length * 0.75;
        if (parseInt(dataSize) > parseInt(localStorageSize)) {
            alert(`The size of the image exceeds the local storage quota.`);
            return false;
        }
        return true;
    };

    const bindUi = () => {
        imgInput.addEventListener(
            "change",
            () => {
                if (imgInput.files.length) {
                    const reader = new FileReader();
                    reader.onload = async (e) => {
                        const dataURI = e.target.result;
                        if (checkImageSize(dataURI)) {
                            database.setItem("webp-converter", dataURI);
                            updateUi();
                        }
                    };
                    reader.readAsDataURL(imgInput.files[0]);
                }
            },
            false
        );
    };

    updateUi();
    bindUi();
})();

function convertDataUriToWebP(dataURI) {
    let mw = maxWidth.value || 300;
    let mh = maxHeight.value || 200;
    let base64Data = dataURI.split(",")[1];
    let binaryData = atob(base64Data);
    let arrayBuffer = new ArrayBuffer(binaryData.length);
    let uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < binaryData.length; i++) {
        uint8Array[i] = binaryData.charCodeAt(i);
    }

    let blob = new Blob([arrayBuffer], { type: "image/png" });
    let url = URL.createObjectURL(blob);
    let img = new Image();

    img.onload = function () {
        let canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        let ctx = canvas.getContext("2d");
        let ratio = Math.min(mw / img.width, mh / img.height);
        canvas.width = parseInt(img.width * ratio);
        canvas.height = parseInt(img.height * ratio);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        let webpDataURI = canvas.toDataURL("image/webp");
        let sizeKb = Math.round((webpDataURI.length * 3) / 4 / 1024);
        size.innerText = `Size: ${sizeKb}kb`;

        imageWebp.src = webpDataURI;
        imageWebp.style.display = "block";
        saveToWebp.href = webpDataURI;
        saveToWebp.removeAttribute("disabled");
        saveToWebp.setAttribute("download", "image.webp");
    };

    img.src = url;
}
