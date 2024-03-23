import createElement from "./createElement.js";

export default function createErudaDevTool() {
    return createElement("script", document.body, {
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
}