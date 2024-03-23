import createElement from "../../../modules/createElement.js";
import decodeUnicode from "../../../modules/decodeUnicode.js";
import createLinksAndScripts from "../../../modules/createLinksAndScripts.js";
import {template} from "./vars.js";

export default function sendWindowMessage(e) {
    let t = JSON.parse(e.data);

    document.body.innerHTML = template;
    let i = setTimeout(() => {
        document.body.innerHTML = "";

        createElement("style", document.body, {
            rel: "stylesheet",
            type: "text/css",
            textContent: decodeUnicode(t.body.css),
        });

        createElement("div", document.body, {
            innerHTML: decodeUnicode(t.body.content),
        });

        createLinksAndScripts(t);
        clearTimeout(i);
    }, 1000);
}
