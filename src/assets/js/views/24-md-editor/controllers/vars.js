import storage from "../../../modules/storage.js";

const _s = el => document.querySelector(el);
const _i = el => document.getElementById(el);

// Preloader
export const preloader = _s('.preloader');
// Header title
export const headerTitle = _s(".app-header-center h3");
// Buttons
export const renderCode = _i("renderCode");
export const saveHtmlCode = _i("saveHtmlCode");
export const toggleView = _i("toggleView");
export const selectTheme = _i("selectTheme");

// Frame
const frame = _s("iframe");
export const output = frame.contentWindow;
// Horizontal split views
export const horizontalSplitView = Split(["#split-h-1", "#split-h-2"], {
    direction: "horizontal",
    minSize: 0,
    gutterSize: 5,
});

// Editor
const mdEditor = _s('#mdEditor');

export const Editor = CodeMirror.fromTextArea(mdEditor, {
    lineWrapping: true,
    lineNumbers: true,
    lineLength: 80,
    matchBrackets: true,
    mode: "markdown",
    theme: storage('editor_theme') ?? 'dracula',
});
