import encryptData from "./controllers/encryptData.js";
import { textAreaInput } from "./controllers/vars.js";

textAreaInput.addEventListener("input", encryptData);

encryptData();

