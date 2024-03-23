import decodeUnicode from "../../../modules/decodeUnicode.js";
import {template} from "./vars.js";

export default function sendWindowMessage(e) {
    let t = JSON.parse(e.data);
    document.body.innerHTML = template;
    let i = setTimeout(() => {
        document.body.innerHTML = decodeUnicode(t.body.content);
        clearTimeout(i);
    }, 1000);
}