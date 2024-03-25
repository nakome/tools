const appContent = document.querySelector('.app-content');
const appMenu = document.getElementById('menu');
const headerTitle = document.getElementById('header-title');
const preloader = document.querySelector('.preloader');

if (headerTitle) {
    const slug = window.location.pathname.replace('/','').replace('.html', '');
    const slugElement = document.querySelector(`nav a[data-slug="${slug}"]`);
    slugElement.className='active';
    headerTitle.innerText = slugElement.title;
}

appMenu && appMenu.classList.remove('active');
appContent && appContent.classList.remove('active-menu');

// You can detect when the document is ready…
document.onreadystatechange = () => {
    if (document.readyState === "complete") {
        preloader.style.display = "none";
        appMenu && appMenu.addEventListener("click", (evt) => {
            evt.preventDefault();
            appMenu.classList.toggle('active');
            appContent.classList.toggle('active-menu');
        }, false);
    }
};