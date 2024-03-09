import { editors } from "./defaultVars.js";
import storage from "../../../modules/storage.js";

/**
 * Function to create a new snippet, which cleans the storage and editor.
 *
 * @return {void}
 */
export default function handleCreateNew() {
    // Clean storage
    ["editor_html_type","editor_html", "editor_css", "editor_js"].forEach((e) => storage(e, ""));
    storage("editor_links", '');
    // Clean editor
    editors[0].setValue("");
    editors[1].setValue("");
    editors[2].setValue("");
}
