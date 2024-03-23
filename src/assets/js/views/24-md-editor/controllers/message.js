import {headerTitle} from "./vars.js"

export default function message(txt) {
    let old = headerTitle.textContent;
    headerTitle.textContent = txt;
    setTimeout(() => {
        headerTitle.textContent = old;
    }, 3000);
}
