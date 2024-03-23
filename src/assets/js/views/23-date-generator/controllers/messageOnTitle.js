export default function messageOnTitle(txt) {
    let id = document.getElementById('header-title')
    let old = id.textContent;
    id.textContent = txt;
    id.style.color = "var(--danger)";
    setTimeout(() => {
        id.textContent = old;
        id.style.color = "var(--info)";
    }, 3000);
}
