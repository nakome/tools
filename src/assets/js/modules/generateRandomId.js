/**
 * Generates a random ID.
 *
 * @return {string} a random ID
 */
export default function generateRandomId() {
    return Math.random().toString(36).substr(2, 9);
}