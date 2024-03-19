
/**
 * Generate a random string
 *
 * @param {Object} options 
 * @returns {string[]}
 */
export default function generateRandomString(options) {
    // options: count, length, uppercase, lowercase, numbers, customCharacters
    const {
        count = 1,
        length = 10,
        uppercase = false,
        lowercase = false,
        numbers = false,
        customCharacters = "",
    } = options;

    let characters = "";
    // Add custom characters
    if (!uppercase && !lowercase && !numbers) {
        characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" +
            customCharacters;
    } else {
        if (uppercase) characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (lowercase) characters += "abcdefghijklmnopqrstuvwxyz";
        if (numbers) characters += "0123456789";
        characters += customCharacters;
    }

    const strings = new Set();

    while (strings.size < count) {
        let randomString = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            randomString += characters[randomIndex];
        }
        strings.add(randomString);
    }

    return [...strings];
}
