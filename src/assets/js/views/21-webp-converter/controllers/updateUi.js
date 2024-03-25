import convertDataUriToWebP from "./convertDataUriToWebP.js";
import { imageDisplay } from "./vars.js";

const updateUi = (mw, mh) => {
    const database = window.localStorage;
    const demo = imageDisplay.getAttribute("src");
    const t2 = setTimeout(() => {
        imageDisplay.src = database.getItem("webp-converter") || demo;
        imageDisplay.style.display = "block";
        database.getItem("webp-converter") &&
            convertDataUriToWebP(database.getItem("webp-converter"), mw, mh);
        clearTimeout(t2);
    }, 200);
};

export default updateUi;