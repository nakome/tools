const textAreaInput = document.getElementById("textAreaInput");
const imageDisplay = document.getElementById('image-display');
const imgInput = document.getElementById("image-input");
const demoBtn = document.getElementById("demoBtn");
const resetBtn = document.getElementById("resetBtn");
const demo = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1"  width="120" height="120"> 
  <rect x="14" y="23" width="200" height="50" fill="#f55" stroke="black" />
</svg>`;

const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
  theme: "dracula",
  lineNumbers: true,
  lineWrapping: true,
  matchBrackets: true,
  mode: "xml",
});

changeSvgFile();

imgInput.addEventListener('change', function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const svgContent = e.target.result;
    textAreaInputEditor.setValue(html_beautify(svgContent));
    imageDisplay.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent);
    imageDisplay.style.display = 'block';
  };

  reader.readAsText(file);
});


textAreaInputEditor.on('change', changeSvgFile);

demoBtn.addEventListener('click', evt => textAreaInputEditor.setValue(demo),false);
resetBtn.addEventListener('click', evt => textAreaInputEditor.setValue(""),false);

function changeSvgFile() {
  let svgContent = textAreaInputEditor.getValue() || demo;
  imageDisplay.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent);
  imageDisplay.style.display = 'block';
}