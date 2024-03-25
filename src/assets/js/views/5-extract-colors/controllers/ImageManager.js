import {_} from "./vars.js";

export default class ImageManager {
    constructor() {
        this.imgInput = _("#image-input");
        this.imgContainer = _("#image-display");
        this.database = window.localStorage;
        this.localStorageSize = 4 * 1024 * 1024;

        this.init();
    }

    updateUi() {
        let t2 = setTimeout(() => {
            this.imgContainer.src = this.database.getItem("extract-colors-image");
            clearTimeout(t2);
        }, 200);
    }

    checkImageSize(dataURI) {
        const dataSize = dataURI.length * 0.75;
        console.log(parseInt(dataSize), parseInt(this.localStorageSize));
        if (parseInt(dataSize) > parseInt(this.localStorageSize)) {
            alert("The size of the image exceeds the local storage quota.");
            return false;
        }
        return true;
    }

    handleImageChange() {
        if (this.imgInput.files.length) {
            let reader = new FileReader();
            reader.onload = (e) => {
                const dataURI = e.target.result;
                if (this.checkImageSize(dataURI)) {
                    this.database.setItem("extract-colors-image", dataURI);
                    this.updateUi();
                }
            };
            reader.readAsDataURL(this.imgInput.files[0]);
        }
    }

    init() {
        const demo = _('#image-display').getAttribute('src');
        if (!this.database.getItem("extract-colors-image")) {
            let t = setTimeout(() => {
                this.database.setItem("extract-colors-image", demo);
                clearTimeout(t);
            }, 100);
        }
        this.updateUi();
        this.imgInput.addEventListener("change", this.handleImageChange.bind(this), false);
    }
}