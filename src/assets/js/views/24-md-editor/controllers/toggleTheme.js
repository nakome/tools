import storage from "../../../modules/storage.js";
import {Editor} from "./vars.js";

export default function toggleTheme(evt) {
    let val = evt.currentTarget.value;
    storage('editor_theme', val);
    Editor.setOption('theme', val);
}