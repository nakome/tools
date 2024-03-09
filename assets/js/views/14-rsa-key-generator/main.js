import copyToClipboard from "../../../javascript/modules/copyToClipboard.js";

const selectMode = document.getElementById("selectMode");
const textAreaInput = document.getElementById("textAreaInput");
const textAreaOutput = document.getElementById("textAreaOutput");
const generate = document.getElementById("generate");
const copyBtn = document.getElementById("copy");

generate.addEventListener("click", generateRSAKeyPair);
copyBtn.addEventListener('click', evt => copyToClipboard(evt,textAreaInput));

function generateRSAKeyPair() {
    generate.textContent = "⌛ Generating";
    generate.className = "btn loading";
    const crypt = new JSEncrypt({ default_key_size: selectMode.value });
    crypt.getKey(() => {
        const publicKey = crypt.getPublicKey();
        const privateKey = crypt.getPrivateKey();
        generate.textContent = "🚀 Generate";
        generate.className = "btn";
        textAreaOutput.value = "Public Key:\n" + publicKey;
        textAreaInput.value = "Private Key:\n" + privateKey;
    });
}

generateRSAKeyPair();

