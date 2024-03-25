import copyToClipboard from "../../../js/modules/copyToClipboard.js";
import escapeBackslashes from "./controllers/escapeBackslashes.js";
import unescapeBackslashes from "./controllers/unescapeBackslashes.js";
import ShowToast from "../../modules/showToast.js";
import {
  demoBtn,
  resetBtn,
  resetBtn2,
  copyBtn,
  textAreaEscaped,
  textAreaUnescaped,
  demo
} from "./controllers/vars.js";

textAreaEscaped.value = demo;
textAreaEscaped.focus();
escapeBackslashes(textAreaEscaped);

textAreaEscaped.addEventListener("input", evt => escapeBackslashes(evt.currentTarget));
textAreaUnescaped.addEventListener("input", evt => unescapeBackslashes(evt.currentTarget));

copyBtn.addEventListener('click', evt => {
  copyToClipboard(evt, textAreaUnescaped.value);
  ShowToast("Copy to clipboard ✅");
});
demoBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEscaped.value = demo;
  escapeBackslashes(textAreaEscaped);
})

resetBtn.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaEscaped.value = "";
  ShowToast("Reset data 🗑️");
});

resetBtn2.addEventListener('click', evt => {
  evt.preventDefault();
  textAreaUnescaped.value = "";
  ShowToast("Reset data 🗑️")
})


