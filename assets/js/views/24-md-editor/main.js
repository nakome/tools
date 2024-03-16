import encodeUnicode from "../../modules/encodeUnicode.js";
import isMobile from "../../modules/isMobile.js";
import exportToMd from "../../modules/exportToMd.js";
import storage from "../../modules/storage.js";

const _s = el => document.querySelector(el);
const _i = el => document.getElementById(el);

// Preloader
const preloader = _s('.preloader');
// Header title
const headerTitle = _s(".app-header-center h3");
// input title
const title = _i("title");
// Buttons
const renderCode = _i("renderCode");
const saveHtmlCode = _i("saveHtmlCode");
const toggleView = _i("toggleView");
// Frame
const frame = _s("iframe");
const output = frame.contentWindow;

// Horizontal split views
const horizontalSplitView = Split(["#split-h-1", "#split-h-2"], {
    direction: "horizontal",
    minSize: 0,
    gutterSize: 5,
});

// Editor
const mdEditor = _s('#mdEditor');
const Editor = CodeMirror.fromTextArea(mdEditor, {
    lineWrapping: true,
    lineNumbers:true,
    lineLength: 80,
    matchBrackets: true,
    mode: "markdown",
    theme: "dracula",
});

if(storage("editor_md")) Editor.setValue(storage("editor_md"));

document.body.addEventListener("keydown", evt => (evt.ctrlKey && evt.keyCode === 13) ? sendPostMessage(evt) : false);
saveHtmlCode.addEventListener("click", evt => exportToMd(`${title.value.trim()}.md`,Editor.getValue()));
renderCode.addEventListener("click", evt => sendPostMessage(evt));
toggleView.addEventListener("click", evt => toggleFullPreview());

// If detect mobile device toggle the view
if (navigator.userAgent.toLowerCase().match(/mobile/i)) toggleFullPreview();

document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        console.log('ready?')
        preloader.style.display = "none";
    }
};

function sendPostMessage() {
    const mdContent = Editor.getValue().replace(/^[\u200B\u200C\u200D\u200E\u200F\uFEFF]/, "");
    const mdParse = marked.parse(mdContent);
    const mdToSend = encodeUnicode(mdParse);
    storage('editor_md', Editor.getValue());
    // Send post message to iframe
    output.postMessage(
        JSON.stringify({
            body: {
                content: mdToSend
            },
        }),
        "*"
    );
    message('Markdown sent');
}
function message(txt) {
    let old = headerTitle.textContent;
    headerTitle.textContent = txt;
    setTimeout(() => {
        headerTitle.textContent = old;
    }, 3000);
}
function toggleFullPreview() {
    let eye = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
    viewBox="0 0 16 16">
    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
    </svg>`;

    let eyeSlash = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash"
    viewBox="0 0 16 16">
     <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
     <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
     <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
    </svg>`;

    toggleView.classList.toggle("active");
    if (toggleView.classList.contains("active")) {
        toggleView.innerHTML = eyeSlash;
        horizontalSplitView.setSizes([0, 100]);
    } else {
        toggleView.innerHTML = eye;
        if (isMobile()) horizontalSplitView.setSizes([100, 0]);
        else horizontalSplitView.setSizes([50, 50]);
    }
}


