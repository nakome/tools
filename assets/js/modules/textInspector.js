/**
 * Calculate the character count, word count, line count, and word distribution of the input text.
 *
 * @param {string} text - the input text to analyze
 * @return {Object} an object containing the character count, word count, line count, and word distribution
 */
export default function textInspector(text) {
    // Contar caracteres
    let characters = text.length;

    // Contar palabras
    let words = text.split(/\s+/).filter(function (word) {
        return word.length > 0; // Filtrar palabras vacías
    }).length;

    // Contar líneas
    let lines = text.split(/\r\n|\r|\n/).length;

    // Calcular distribución de palabras
    let wordDistribution = {};
    text.split(/\s+/).forEach(function (word) {
        word = word.toLowerCase(); // Convertir palabra a minúsculas para normalizar
        if (word.length > 0) {
            wordDistribution[word] = (wordDistribution[word] || 0) + 1;
        }
    });

    return {
        characters: characters,
        words: words,
        lines: lines,
        wordDistribution: wordDistribution
    };
}