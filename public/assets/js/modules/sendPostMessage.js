import message from"./message.js";import storage from"./storage.js";import encodeUnicode from"./encodeUnicode.js";import{editors,output,chooseLanguageHtml}from"../../js/views/0-html-editor/controllers/defaultVars.js";import formatCode from"./formatCode.js";let baseUrl="https://agasallo-1-e1977709.deta.app";const MarkdownToHtml=async e=>await formatCode(baseUrl+"/api/convert/to/md",{html_code:e});export default async function sendPostMessage(){message("Sending code..."),storage("editor_html_type",chooseLanguageHtml.value),storage("editor_html",editors[0].getValue()),storage("editor_css",editors[1].getValue()),storage("editor_js",editors[2].getValue());let e=storage("editor_links")??{};output.postMessage(JSON.stringify({body:{content:encodeUnicode("html"===chooseLanguageHtml.value?editors[0].getValue():await MarkdownToHtml(editors[0].getValue())),css:encodeUnicode(editors[1].getValue()),js:encodeUnicode(editors[2].getValue()),links:encodeUnicode(JSON.stringify(e))}}),"*")}