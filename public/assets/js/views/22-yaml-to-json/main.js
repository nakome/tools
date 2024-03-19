import copyToClipboard from"../../../js/modules/copyToClipboard.js";const textAreaInput=document.getElementById("textAreaInput"),textAreaOutput=document.getElementById("textAreaOutput"),copyBtn=document.getElementById("copyBtn"),resetBtn=document.getElementById("resetBtn"),demoBtn=document.getElementById("demoBtn"),textAreaInputEditor=CodeMirror.fromTextArea(textAreaInput,{mode:"yaml",theme:"dracula",lineNumbers:!0,lineWrapping:!0,foldGutter:!0}),textAreaOutputEditor=CodeMirror.fromTextArea(textAreaOutput,{mode:{name:"javascript",json:!0},theme:"dracula",lineNumbers:!0,lineWrapping:!0,readOnly:!0}),demo="config:\ndebug: true\ntitle: Hello World\nbody:\n  - Hello\n  - World";function formatYaml(){let t=textAreaInputEditor.getValue();try{let e=JSON.stringify(YAML.parse(t),null,2);textAreaOutputEditor.setValue(e)}catch(t){textAreaOutputEditor.setValue(JSON.stringify(t,null,2))}}formatYaml(),textAreaInputEditor.on("change",formatYaml),demoBtn.addEventListener("click",(t=>{t.preventDefault(),textAreaInputEditor.setValue(demo)})),copyBtn.addEventListener("click",(t=>{t.preventDefault(),copyToClipboard(t,textAreaOutputEditor.getValue())}),!1),resetBtn.addEventListener("click",(t=>{t.preventDefault(),textAreaInputEditor.setValue("")}));