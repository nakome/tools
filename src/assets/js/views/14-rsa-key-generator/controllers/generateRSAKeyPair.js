import {
    selectMode,
    textAreaInput,
    textAreaOutput,
    generate
} from "./controllers/vars.js";

export default function generateRSAKeyPair() {
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