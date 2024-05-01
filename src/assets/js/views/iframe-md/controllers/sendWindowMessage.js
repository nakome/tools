import { codeToHtml } from 'https://esm.sh/shiki@1.0.0'
import decodeUnicode from "../../../modules/decodeUnicode.js";
import sleep from "../../../modules/sleep.js";
import {template} from "./vars.js";

export default function sendWindowMessage(e) {
    let t = JSON.parse(e.data);
    document.body.innerHTML = template;
    sleep(1000).then(() => {
        document.body.innerHTML = decodeUnicode(t.body.content);
        sleep(200).then(() => {
            const code = document.querySelectorAll('pre code[class^="language-"]');
            code.forEach(async item => {
                const html = item.textContent;
                item.innerHTML = await codeToHtml(html, {
                    lang: 'python',
                    theme: 'dracula'
                })
            })
        })
    })
}

