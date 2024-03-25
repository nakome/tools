import {
    textAreaInputEditor,
    textAreaOutputEditor
} from './vars.js';
/**
 * Format YAML input into JSON and set the output in the text area.
 *
 * @param {void} None
 * @return {void} None
 */
export default function formatYaml() {
    let yamlOutput = textAreaInputEditor.getValue();
    try {
        let jsonOutput = YAML.stringify(JSON.parse(yamlOutput), { schema: 'json' });
        textAreaOutputEditor.setValue(jsonOutput);
    } catch (error) {
        console.log(error);
        textAreaOutputEditor.setValue(error.message);
    }
}
