/**
 * Creates a new element, sets attributes based on the provided args, and appends it to the specified location.
 *
 * @param {string} element - The type of element to create.
 * @param {Element} where - The parent element to append the new element to.
 * @param {Object} args - Key-value pairs of attributes to set on the new element.
 * @return {Element} The newly created and appended element.
 */
export default function createElement(element, where, args) {
  let d = document.createElement(element);
  if (args) for (const [k, v] of Object.entries(args)) d[k] = v;
  where.appendChild(d);
  return d;
}
