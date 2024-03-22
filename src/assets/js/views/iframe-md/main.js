import decodeUnicode from "../../modules/decodeUnicode.js";
let template = `<div class="preloader">
    <div class="loader">
        <svg height="100%" viewBox="0 0 32 32" width="100%">
            <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style="stroke: white; opacity: 0.2;"></circle>
            <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style="stroke: #ddd; opacity: 0.5; stroke-dasharray: 80; stroke-dashoffset: 60;"></circle>
        </svg>
    </div>
</div>`;
window.addEventListener("message", function (e) {
    let t = JSON.parse(e.data);
    document.body.innerHTML = template;
    let i = setTimeout(() => {
        document.body.innerHTML = decodeUnicode(t.body.content);
        clearTimeout(i);
    }, 1000);
});
