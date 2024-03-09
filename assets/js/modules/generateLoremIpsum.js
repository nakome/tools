/**
 * Generates Lorem Ipsum text based on the specified options.
 *
 * @param {object} options - An object containing the options for generating the text
 * @return {string} The generated Lorem Ipsum text
 */
export default function generateLoremIpsum(options) {
    const {
        type = "paragraphs",
        paragraphs = 1,
        minSentences = 5,
        maxSentences = 10,
        minWords = 4,
        maxWords = 8,
    } = options;

    const loremIpsumWords = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum",];

    let loremIpsumText = "";

    for (let i = 0; i < paragraphs; i++) {
        if (i > 0) {
            // Add newline between paragraphs
            loremIpsumText += "\n\n";
        }

        if (type === "paragraphs") {
            for (let j = 0; j < getRandomInt(minSentences, maxSentences); j++) {
                loremIpsumText +=
                    generateSentence(minWords, maxWords, loremIpsumWords) + " ";
            }
        } else if (type === "sentences") {
            loremIpsumText += generateSentence(minWords, maxWords, loremIpsumWords);
        } else if (type === "words") {
            for (let k = 0; k < getRandomInt(minWords, maxWords); k++) {
                loremIpsumText +=
                    loremIpsumWords[Math.floor(Math.random() * loremIpsumWords.length)] +
                    " ";
            }
        }
    }

    return loremIpsumText.trim(); // Remove leading/trailing whitespace
}

/**
 * Generates a random sentence with a length between minWords and maxWords, using the provided list of words.
 *
 * @param {number} minWords - the minimum number of words in the generated sentence
 * @param {number} maxWords - the maximum number of words in the generated sentence
 * @param {string[]} words - the list of words to choose from when generating the sentence
 * @return {string} the randomly generated sentence
 */
function generateSentence(minWords, maxWords, words) {
    const sentenceLength = getRandomInt(minWords, maxWords);
    let sentence = "";

    for (let i = 0; i < sentenceLength; i++) {
        sentence += words[Math.floor(Math.random() * words.length)] + " ";
    }

    // Capitalize first letter and add period at the end
    return sentence.charAt(0).toUpperCase() + sentence.slice(1).trim() + ".";
}

/**
 * Generates a random integer between the specified minimum and maximum values (inclusive).
 *
 * @param {number} min - The minimum value for the random integer
 * @param {number} max - The maximum value for the random integer
 * @return {number} A random integer between the specified minimum and maximum values
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
