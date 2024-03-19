import createElement from "../../modules/createElement.js";
import decodeUnicode from "../../modules/decodeUnicode.js";
import createLinksAndScripts from "../../modules/createLinksAndScripts.js";

window.addEventListener("message", function (e) {
  let t = JSON.parse(e.data);

  document.body.innerHTML =
    '<div class="preloader"><div class="loader"><svg height="100%" viewBox="0 0 32 32" width="100%"><circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style="stroke: blue; opacity: 0.2;"></circle><circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style="stroke: blue; opacity: 0.5; stroke-dasharray: 80; stroke-dashoffset: 60;"></circle></svg></div></div>';
  let i = setTimeout(() => {
    document.body.innerHTML = "";

    createElement("style", document.body, {
      rel: "stylesheet",
      type: "text/css",
      textContent: decodeUnicode(t.body.css),
    });

    createElement("div", document.body, {
      innerHTML: decodeUnicode(t.body.content),
    });

    createLinksAndScripts(t);
    clearTimeout(i);
  }, 1000);
});

createElement("script", document.body, {
  src: "https://cdn.jsdelivr.net/npm/eruda",
  onload: function () {
    const el = document.createElement("div");
    document.body.appendChild(el);
    eruda.init({
      tool: ["console", "elements", "network"],
      defaults: {
        displaySize: 40,
        theme: "Dracula",
      },
    });
    eruda.show();
    // If detect mobile device toggle the view
    if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
      eruda.hide();
    }
  },
});
