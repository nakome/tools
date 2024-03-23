import {tools} from "./vars.js";

export default function searchBar(evt) {
    let val = evt.currentTarget.value;
    tools.forEach(tool => {
        let regex = new RegExp(`${val}`, 'i');
        if (!tool.title.match(regex)) {
            tool.className = "hide-tool";
        }else{
            tool.className = "";
        }
    })
}