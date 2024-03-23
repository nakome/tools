import sendWindowMessage from "./controllers/sendWindowMessage.js";
import createErudaDevTool from "../../../js/modules/createErudaDevTool.js";

window.addEventListener("message", sendWindowMessage);

createErudaDevTool();