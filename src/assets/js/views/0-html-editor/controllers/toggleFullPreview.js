import isMobile from "../../../modules/isMobile.js";
import {toggleView,horizontalSplitView,eyeIcon,eyeSlashIcon} from "./vars.js";

export default function toggleFullPreview() {
    toggleView.classList.toggle("active");
    if (toggleView.classList.contains("active")) {
        toggleView.innerHTML = eyeSlashIcon;
        horizontalSplitView.setSizes([0, 100]);
    } else {
        toggleView.innerHTML = eyeIcon;
        if (isMobile()) horizontalSplitView.setSizes([100, 0]);
        else horizontalSplitView.setSizes([50, 50]);
    }
}
