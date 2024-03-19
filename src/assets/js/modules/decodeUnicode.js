/**
 * Decodes a Unicode string encoded in base64.
 *
 * @param {string} e - The Unicode string encoded in base64
 * @return {string} The decoded Unicode string
 */
const decodeUnicode = (e) =>
  decodeURIComponent(
    atob(e)
      .split("")
      .map((e) => "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2))
      .join("")
  );

export default decodeUnicode;
