import generateLoremIpsum from "../../../modules/generateLoremIpsum.js";

import {
    typeOfText,
    numberOfParagraphs,
    minNumOfSentencies,
    maxNumOfSentencies,
    minNumOfWords,
    maxNumOfWords,
    output,
  } from "./vars.js";


/**
 * Handles the generation of Lorem Ipsum text.
 * @param {EventTarget} evt
 */
const handleGenerate = (evt) => {
    evt.preventDefault();
    const options = {
      type: typeOfText.value,
      paragraphs: parseInt(numberOfParagraphs.value) ?? 2,
      minSentences: parseInt(minNumOfSentencies.value) ?? 2,
      maxSentences: parseInt(maxNumOfSentencies.value) ?? 2,
      minWords: parseInt(minNumOfWords.value) ?? 2,
      maxWords: parseInt(maxNumOfWords.value) ?? 2,
    };
    let outputHtml = generateLoremIpsum(options);
    output.innerHTML = outputHtml;
  }

export default handleGenerate;