import {textAreaJsonEditor} from "./vars.js";

export default function testJsonOutput(evt) {
    try {
      let output = JSON.parse(evt.value);
      textAreaJsonEditor.setValue(JSON.stringify(output, null, 2));
    } catch (error) {
      textAreaJsonEditor.setValue("Error, " + error);
    };
  }