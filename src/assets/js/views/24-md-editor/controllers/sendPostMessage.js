import storage from "../../../modules/storage.js";
import encodeUnicode from "../../../modules/encodeUnicode.js";
import message from "./message.js";

import {Editor,output} from "./vars.js";


export default function sendPostMessage() {
    const mdContent = Editor.getValue().replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "");
    const mdParse = marked.parse(mdContent);
    const mdToSend = encodeUnicode(mdParse);

    storage('editor_md', Editor.getValue());

    message('Markdown send');

    // Send post message to iframe
    output.postMessage(
        JSON.stringify({
            body: {
                content: mdToSend
            },
        }),
        "*"
    );
}

