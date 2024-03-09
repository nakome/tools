import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

const textAreaInput = document.getElementById("textAreaInput");
const textAreaOutput = document.getElementById("textAreaOutput");

const copyBtn = document.getElementById("copyBtn");
const resetBtn = document.getElementById("resetBtn");
const demoBtn = document.getElementById("demoBtn");

const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
    mode: "yaml",
    theme: "dracula",
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true
});

const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
    mode: { name: "javascript", json: true },
    theme: "dracula",
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true
});

const demo = `config:
debug: true
title: Hello World
body:
  - Hello
  - World`;

formatYaml();

textAreaInputEditor.on('change', formatYaml);

demoBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInputEditor.setValue(demo);
})

copyBtn.addEventListener('click', evt => {
    evt.preventDefault();
    copyToClipboard(evt, textAreaOutputEditor.getValue())
}, false);

resetBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInputEditor.setValue("");
});

function formatYaml() {
    let yamlOutput = textAreaInputEditor.getValue();
    try {
        let jsonOutput = JSON.stringify(YAML.parse(yamlOutput), null, 2);
        textAreaOutputEditor.setValue(jsonOutput);
    } catch (error) {
        textAreaOutputEditor.setValue(JSON.stringify(error, null, 2));
    }
}
