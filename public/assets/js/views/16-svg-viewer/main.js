const textAreaInput=document.getElementById("textAreaInput"),imageDisplay=document.getElementById("image-display"),imgInput=document.getElementById("image-input"),demoBtn=document.getElementById("demoBtn"),resetBtn=document.getElementById("resetBtn"),demo='<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="120" height="120"> \n  <rect x="14" y="23" width="200" height="50" fill="#f55" stroke="black" />\n</svg>',textAreaInputEditor=CodeMirror.fromTextArea(textAreaInput,{theme:"dracula",lineNumbers:!0,lineWrapping:!0,matchBrackets:!0,mode:"xml"});function changeSvgFile(){let e=textAreaInputEditor.getValue()||demo;imageDisplay.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(e),imageDisplay.style.display="block"}changeSvgFile(),imgInput.addEventListener("change",(function(e){const t=e.target.files[0],n=new FileReader;n.onload=function(e){const t=e.target.result;textAreaInputEditor.setValue(html_beautify(t)),imageDisplay.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(t),imageDisplay.style.display="block"},n.readAsText(t)})),textAreaInputEditor.on("change",changeSvgFile),demoBtn.addEventListener("click",(e=>textAreaInputEditor.setValue(demo)),!1),resetBtn.addEventListener("click",(e=>textAreaInputEditor.setValue("")),!1);