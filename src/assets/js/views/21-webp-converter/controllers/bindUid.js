import updateUi from "./updateUi.js";
import checkImageSize from "./checkImageSize.js";

import { imgInput } from "./vars.js";

const bindUi = () => {
    imgInput.addEventListener(
        "change",
        () => {
            if (imgInput.files.length) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const dataURI = e.target.result;
                    if (checkImageSize(dataURI)) {
                        window.localStorage.setItem("webp-converter", dataURI);
                        updateUi();
                    }
                };
                reader.readAsDataURL(imgInput.files[0]);
            }
        },
        false
    );
};

export default bindUi;