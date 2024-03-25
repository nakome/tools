import storage from "../../../modules/storage.js";

export const copyBtn = document.getElementById("copyBtn");
export const convertToCss = document.getElementById("convertToCss");
export const selectTheme = document.getElementById("selectTheme");
export const textAreaInput = document.getElementById("textAreaInput");
export const textAreaInputEditor = CodeMirror.fromTextArea(textAreaInput, {
    mode: "css",
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    lineWrapping: true,
});
export const textAreaOutput = document.getElementById("textAreaOutput");
export const textAreaOutputEditor = CodeMirror.fromTextArea(textAreaOutput, {
    mode: "sass",
    theme: storage('editor_theme') ?? 'dracula',
    lineNumbers: true,
    lineWrapping: true,
    readOnly: true,
});


export const demo = `@mixin theme($theme: DarkGray) {
    background: $theme;
    box-shadow: 0 0 1px rgba($theme, .25);
    color: #fff;
}
.info {
    @include theme;
}
.alert {
    @include theme($theme: DarkRed);
}
.success {
    @include theme($theme: DarkGreen);
}`;