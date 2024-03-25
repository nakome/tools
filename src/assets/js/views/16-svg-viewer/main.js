import changeSvgFile from "./controllers/changeSvgFile.js";

import {
  imageDisplay,
  imgInput,
  demoBtn,
  resetBtn,
  demo,
  textAreaInputEditor
} from "./controllers/vars.js";

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

demoBtn.addEventListener('click', evt => textAreaInputEditor.setValue(demo), false);
resetBtn.addEventListener('click', evt => textAreaInputEditor.setValue(""), false);
