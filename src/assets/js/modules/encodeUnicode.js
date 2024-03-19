/**
 * Encodes a string to Base64 using UTF-8 encoding.
 *
 * @param {string} str - The string to be encoded
 * @return {string} The Base64 encoded string
 */
export default function encodeUnicode(str) {
  try {
    // First, we use encodeURIComponent to get percent-encoded UTF-8,
    // then we convert the percent encodings into raw bytes which
    // can be fed into btoa.
    return btoa(
      encodeURIComponent(str).replace(
        /%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
          let n = `0x${p1}`;
          return String.fromCharCode(n);
        }
      )
    );
  } catch (error) {
    console.error("Error encoding to Base64:", error.message);
    return null;
  }
}
