import {verticalSplitView} from "./defaultVars.js";

/**
 * Function to toggle the collapse of blocks.
 *
 * @param {Event} evt - the event object
 * @param {number} num - the block number
 * @return {void}
 */
export default function handleToggleBlock(evt, num) {
    evt.preventDefault();
    const sp = document.getElementById(`split-v-${num}`);
    const isActive = sp.classList.toggle("active");
    const sizes = [33.33, 33.33, 33.33];
    switch (num) {
      case 0:
        verticalSplitView.setSizes(isActive ? [100, 0, 0] : sizes);
        break;
      case 1:
        verticalSplitView.setSizes(isActive ? [0, 100, 0] : sizes);
        break;
      case 2:
        verticalSplitView.setSizes(isActive ? [0, 0, 100] : sizes);
        break;
      default:
        verticalSplitView.setSizes(sizes);
        break;
    }
  }