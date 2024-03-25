import {textAreaDecoded}from "./vars.js";

/**
 * Encodes a URL and outputs the results in an HTML list
 * @param {EventTarget} evt
 */
export default function encodeUrl(evt) {
    try {
      const encodedUrl = encodeURIComponent(evt.value);
      textAreaDecoded.value = `Encoded URL: ${encodedUrl}`;
    } catch (error) {
      textAreaDecoded.value = `Error encoding URL: ${error.message}`;
    }
  }