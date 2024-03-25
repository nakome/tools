import {
    textAreaOutputEditor,
    textAreaInputEditor
} from "./vars.js";

/**
 * Transform markdown to html
 */
export default async function transformToHtml() {
    try {
        let options = {
            target: "ESNext",
            module: "ES6",
            removeComments: true,
            strict: true
        };

        let outputJs = window.ts.transpile(textAreaInputEditor.getValue(), options);
        textAreaOutputEditor.setValue(outputJs);
    } catch (error) {
        textAreaOutputEditor.setValue("Error durante la transpilación:", error);
    }
}