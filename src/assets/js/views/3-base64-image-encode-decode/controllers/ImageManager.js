import {
    _,
    textAreaInput,
    imageDisplay,
    imgInput
} from "./vars.js";

export default class ImageManager {
    constructor() {
        this.database = window.localStorage;
        this.localStorageSize = 2 * 1024 * 1024; // 4 MB

        this.database.setItem("image-base64", "");

        this.updateUi();
        this.bindUi();
    }

    updateUi() {
        const demo = imageDisplay.getAttribute('src');
        const t2 = setTimeout(() => {
            imageDisplay.src = this.database.getItem("image-base64") || demo;
            textAreaInput.value = this.database.getItem("image-base64") || demo;
            imageDisplay.style.display = 'block';
            clearTimeout(t2);
        }, 200);
    }

    checkImageSize(dataURI) {
        const dataSize = dataURI.length * 0.75;
        if (parseInt(dataSize) > parseInt(this.localStorageSize)) {
            alert(`The size of the image exceeds the local storage quota.`);
            return false;
        }
        return true;
    }

    bindUi() {
        imgInput.addEventListener("change", () => {
            if (imgInput.files.length) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const dataURI = e.target.result;
                    if (this.checkImageSize(dataURI)) {
                        this.database.setItem("image-base64", dataURI);
                        this.updateUi();
                    }
                };
                reader.readAsDataURL(imgInput.files[0]);
            }
        }, false);
    }
}