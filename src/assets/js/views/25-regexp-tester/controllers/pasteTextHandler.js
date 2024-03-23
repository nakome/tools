import {output} from './vars.js';

export default function pasteTextHandler(evt) {
    evt.preventDefault();
    let txt = (evt.clipboardData || window.clipboardData).getData('text');
    output.innerHTML += DOMPurify.sanitize(txt);
}