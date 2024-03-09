/**
 * Store a value in the local storage or retrieve a value from the local storage.
 *
 * @param {string} key - The key for the local storage item
 * @param {any} value - The value to be stored in the local storage
 * @return {void}
 */
const storage = (key, value) =>
  value == undefined
    ? JSON.parse(localStorage.getItem(key))
    : localStorage.setItem(key, JSON.stringify(value));

export default storage;