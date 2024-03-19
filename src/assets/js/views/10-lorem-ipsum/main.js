import generateLoremIpsum from "../../../js/modules/generateLoremIpsum.js";
import copyToClipboard from "../../../js/modules/copyToClipboard.js";

const typeOfText = document.getElementById("typeOfText");
const numberOfParagraphs = document.getElementById("numberOfParagraphs");
const minNumOfSentencies = document.getElementById("minNumOfSentencies");
const maxNumOfSentencies = document.getElementById("maxNumOfSentencies");
const minNumOfWords = document.getElementById("minNumOfWords");
const maxNumOfWords = document.getElementById("maxNumOfWords");
const generate = document.getElementById("generate");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

let outputHtml = generateLoremIpsum({
  type: "paragraphs",
  paragraphs: 5,
  minSentences: 2,
  maxSentences: 10,
  minWords: 4,
  maxWords: 20,
});
output.innerHTML = outputHtml;


copyBtn.addEventListener('click',evt => {
  evt.preventDefault();
  copyToClipboard(evt,output.innerHTML);
})


/**
 * Handles the generation of Lorem Ipsum text.
 * @param {EventTarget} evt 
 */
const handleGenerate = (evt) => {
  evt.preventDefault();
  const options = {
    type: typeOfText.value,
    paragraphs: parseInt(numberOfParagraphs.value),
    minSentences: parseInt(minNumOfSentencies.value),
    maxSentences: parseInt(maxNumOfSentencies.value),
    minWords: parseInt(minNumOfWords.value),
    maxWords: parseInt(maxNumOfWords.value),
  };
  let outputHtml = generateLoremIpsum(options);
  output.innerHTML = outputHtml;
}

generate.addEventListener("click",handleGenerate,false);

