import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import storage from "../../../js/modules/storage.js";

const textAreaInput = document.getElementById("textAreaInput");
const textAreaOutput = document.getElementById("textAreaOutput");
const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const demoBtn = document.getElementById("demoBtn");
const selectTheme = document.getElementById("selectTheme");

const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
    mode: { name: "javascript", json: true },
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true
});

const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
    mode: "yaml",
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true
});

selectTheme.addEventListener("change", evt => {
    let val = evt.currentTarget.value;
    storage('editor_theme', val);
    textAreaInputEditor.setOption('theme', val);
    textAreaOutputEditor.setOption('theme', val);
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
