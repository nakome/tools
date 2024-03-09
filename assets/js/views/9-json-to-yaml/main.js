import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

const textAreaInput = document.getElementById("textAreaInput");
const textAreaOutput = document.getElementById("textAreaOutput");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const demoBtn = document.getElementById("demoBtn");

const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
    mode: { name: "javascript", json: true },
    theme: "dracula",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true
});

const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
    mode: "yaml",
    theme: "dracula",
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true
});

formatYaml();

textAreaInputEditor.on('change', formatYaml);

demoBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInputEditor.setValue('{"ready":true}');
}, false);

copyBtn.addEventListener('click', evt => {
    evt.preventDefault();
    copyToClipboard(evt, textAreaOutputEditor.getValue());
}, false);

resetBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInputEditor.setValue('');
}, false);

/**
 * Format YAML input into JSON and set the output in the text area.
 *
 * @param {void} None
 * @return {void} None
 */
function formatYaml() {
    let yamlOutput = textAreaInputEditor.getValue();
    try {
        let jsonOutput = YAML.stringify(JSON.parse(yamlOutput), { schema: 'json' });
        textAreaOutputEditor.setValue(jsonOutput);
    } catch (error) {
        console.log(error);
        textAreaOutputEditor.setValue(error.message);
    }
}
