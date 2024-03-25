import { maxWidth, maxHeight, imageWebp } from "./vars.js";

export default function convertDataUriToWebP(dataURI) {
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

    img.onload = () => {
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