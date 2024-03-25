import {textAreaInputEditor,textAreaOutputEditor} from './vars.js';

/**
 * Transform markdown to html
 */
export default function transformToHtml() {
    try {
      let options = {
        indent_size: "2"
      };
      const sanitizedContent = html_beautify(DOMPurify.sanitize(marked.parse(textAreaInputEditor.getValue()),options));
      textAreaOutputEditor.setValue(sanitizedContent);
    } catch (error) {
      textAreaOutputEditor.setValue(`Error sanitizing HTML: ${error.message}`);
    }
  }