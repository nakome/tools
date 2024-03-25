import {textAreaInputEditor,imageDisplay} from './vars.js';

export default function changeSvgFile() {
    let svgContent = textAreaInputEditor.getValue() || demo;
    imageDisplay.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svgContent);
    imageDisplay.style.display = 'block';
  }