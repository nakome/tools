const _s = el => document.querySelector(el);
const _i = el => document.getElementById(el);

export const preloader = _s('.preloader');
// iframe
export const frame = _s("iframe");
export const output = frame.contentWindow;
// input title
export const title = _i("title");
// selector code
export const chooseLanguageHtml = _i("chooseLanguageHtml");
// textarea code
export const txt = _i("html");
export const css = _i("css");
export const js = _i("javascript");
// Header title
export const headerTitle = _s(".app-header-center h3");
// Buttons
export const renderCode = _i("renderCode");
export const saveHtmlCode = _i("saveHtmlCode");
export const createNewSnippet = _i("createNewSnippet");
export const settingsNew = _i("settingsNew");
export const toggleView = _i("toggleview");
// Split ids
export const sph1 = _i("split-h-1");
export const sph2 = _i("split-h-2");
export const spv0 = _i("split-v-0");
export const spv1 = _i("split-v-1");
export const spv2 = _i("split-v-2");
// Horizontal split views
export const horizontalSplitView = Split(["#split-h-1", "#split-h-2"], {
  direction: "horizontal",
  minSize: 0,
  gutterSize: 5,
});
// Vertical split views
export const verticalSplitView = Split(["#split-v-0", "#split-v-1", "#split-v-2"], {
  direction: "vertical",
  minSize: 0,
  gutterSize: 5,
});

// Get the textareas
const listOfAreas = [spv0, spv1, spv2].map((e) => e.querySelector("textarea"));

// Create CodeMirror instances using the cached results
export const editors = listOfAreas.map((textarea, index) => {
  const mode = index === 0 ? "htmlmixed" : index === 1 ? "text/css" : "text/javascript";
  return CodeMirror.fromTextArea(textarea, {
    lineNumbers: true,
    lineWrapping: true,
    lineLength: 80,
    matchBrackets: true,
    mode: mode,
    theme: "dracula",
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    foldGutter: true,
  });
});