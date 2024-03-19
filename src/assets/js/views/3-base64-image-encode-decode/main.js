import copyToClipboard from "../../../js/modules/copyToClipboard.js";

const textAreaInput = document.getElementById('textAreaInput');
const imageDisplay = document.getElementById('image-display');
const imgInput = document.getElementById("image-input");
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener('click', evt => copyToClipboard(evt,textAreaInput.value));

textAreaInput.addEventListener('paste', evt => {
    let imgData = evt.clipboardData.getData('text');
    imageDisplay.setAttribute('src', imgData);
    imageDisplay.style.display = 'block';
    window.localStorage.setItem("image-base64", imgData);
});


(() => {
    const database = window.localStorage;
    const localStorageSize = 2 * 1024 * 1024; // 4 MB

    database.setItem("image-base64", "");

    const updateUi = () => {
        const demo = imageDisplay.getAttribute('src');
        const t2 = setTimeout(() => {
            imageDisplay.src = database.getItem("image-base64") || demo;
            textAreaInput.value = database.getItem("image-base64") || demo;
            imageDisplay.style.display = 'block';
            clearTimeout(t2);
        }, 200);
    };

    const checkImageSize = (dataURI) => {
        const dataSize = dataURI.length * 0.75;
        if (parseInt(dataSize) > parseInt(localStorageSize)) {
            alert(`The size of the image exceeds the local storage quota.`);
            return false;
        }
        return true;
    };

    const bindUi = () => {
        imgInput.addEventListener("change", () => {
            if (imgInput.files.length) {
                const reader = new FileReader();
                reader.onload = async (e) => {
                    const dataURI = e.target.result;
                    if (checkImageSize(dataURI)) {
                        database.setItem("image-base64", dataURI);
                        updateUi();
                    }
                };
                reader.readAsDataURL(imgInput.files[0]);
            }
        }, false);
    };

    updateUi();
    bindUi();
})();
