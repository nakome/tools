/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The input string to be capitalized
 * @return {string} The capitalized string
 */
export default function capitalize(str) {
    if (!str || str.length === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}