import sendPostMessage from "../../../modules/sendPostMessage.js";

/**
 * Handles sending a message if the ctrl key and enter key are pressed.
 *
 * @param {Event} evt - the event object
 * @return {void}
 */
export default function handlePostMessage(evt) {
  if (evt.ctrlKey && evt.keyCode === 13) {
    sendPostMessage();
  }
}
