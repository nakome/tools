
import formatCode from "../../../modules/formatCode.js";

import { textAreaInputEditor, textAreaOutputEditor } from "./vars.js";

/**
 * Transform markdown to html
 */
export default async function transformToHtml() {
    try {
        let baseUrl = "https://agasallo-1-e1977709.deta.app";
        const ScssToCss = async (content) => await formatCode(baseUrl + "/api/convert/to/scss", {
            css_code: content,
        });
        textAreaOutputEditor.setValue(await ScssToCss(textAreaInputEditor.getValue()));
    } catch (error) {
        textAreaOutputEditor.setValue(`Error sanitizing HTML: ${error.message}`);
    }
}