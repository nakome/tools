const appContent = document.querySelector('.app-content');
const appMenu = document.getElementById('menu');
const headerTitle = document.getElementById('header-title');

if (!window.location.pathname.includes('editor')) {
    const slug = window.location.pathname.replace('/','').replace('.html', '');
    const slugElement = document.querySelector(`nav a[data-slug="${slug}"]`);
    slugElement.className='active';
    headerTitle.innerText = slugElement.title;
}

if (!navigator.userAgent.toLowerCase().match(/mobile/i)) {
    appMenu && appMenu.classList.toggle('active');
    appContent && appContent.classList.toggle('active-menu');
}

// You can detect when the document is ready…
document.addEventListener('DOMContentLoaded', () => {
    appMenu && appMenu.addEventListener("click", (evt) => {
        evt.preventDefault();
        appMenu.classList.toggle('active');
        appContent.classList.toggle('active-menu');
    }, false);
}, false);


document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        document.querySelector('.preloader').style.display = "none";
    }
};