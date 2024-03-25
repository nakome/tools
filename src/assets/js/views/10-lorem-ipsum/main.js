import generateLoremIpsum from "../../../js/modules/generateLoremIpsum.js";
import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import handleGenerate from "./controllers/handleGenerate.js";
import ShowToast from "../../modules/showToast.js";
import {
  generate,
  output,
  copyBtn
} from "./controllers/vars.js";

let outputHtml = generateLoremIpsum({
  type: "paragraphs",
  paragraphs: 5,
  minSentences: 2,
  maxSentences: 10,
  minWords: 4,
  maxWords: 20,
});
output.innerHTML = outputHtml;


copyBtn.addEventListener('click', evt => {
  evt.preventDefault();
  copyToClipboard(evt, output.innerHTML);
  ShowToast("Copy to clipboard ✅");
})

generate.addEventListener("click", handleGenerate, false);

