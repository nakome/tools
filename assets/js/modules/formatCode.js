/**
 * Asynchronously formats code using the provided URL and arguments.
 *
 * @param {string} url - The URL for fetching the code
 * @param {object} args - The arguments for fetching the code
 * @return {Promise} The formatted code or an error message
 */
export default async function formatCode(url, args) {
  try {
    const response = await fetchCode(url, args);
    return response.status
      ? response.data
      : "Error: " + JSON.stringify(response);
  } catch (error) {
    return error;
  }
}
/**
 * Asynchronous function to fetch data from the specified URL using POST method and return the parsed JSON response.
 *
 * @param {string} url - The URL to fetch the data from
 * @param {Object} data - The data to be sent with the request
 * @return {Promise<Object>} Parsed JSON response from the fetch request
 */
async function fetchCode(url, data) {
  let options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  };
  const response = await fetch(url, options);
  const output = await response.json();
  return output;
}
