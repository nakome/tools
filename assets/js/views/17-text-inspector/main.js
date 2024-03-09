import textInspector from "../../../javascript/modules/textInspector.js";
import htmlEntities from "../../../javascript/modules/htmlEntities.js";

const textOutput = document.getElementById("textOutput");
const textAreaInput = document.getElementById("textAreaInput");
const demoBtn = document.getElementById("demoBtn");
const resetBtn = document.getElementById("resetBtn");


handleTextInspector(textAreaInput.value);

textAreaInput.addEventListener('input', evt => handleTextInspector(evt.currentTarget.value));

demoBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInput.value = 'Hello World this is a example content';
    handleTextInspector(textAreaInput.value);
},false);

resetBtn.addEventListener('click', evt => {
    evt.preventDefault();
    textAreaInput.value = '';
},false);


function handleTextInspector(text) {
    let str = textInspector(htmlEntities(text));

    let tpl = '';
    for (let word in str.wordDistribution) {
        if (str.wordDistribution.hasOwnProperty(word)) {
            let count = str.wordDistribution[word];
            tpl += `<span><strong>Word:</strong> ${word} <strong>=</strong> ${count}</span>`
        }
    }
    textOutput.innerHTML = `
        <p>Characters: <strong>${str.characters}</strong></p>
        <p>Words: <strong>${str.words}</strong></p>
        <p>Lines: <strong>${str.lines}</strong></p>
        <p>Word Distribution:</p>
        <pre>${tpl}</pre>
    `;
}