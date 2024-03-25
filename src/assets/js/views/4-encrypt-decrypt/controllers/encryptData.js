
import {
    textAreaInput,
    textAreaOutput,
    textAreaDecrypted,
    textAreaRsaPrivate,
    textAreaRsaPublic
} from "./vars.js";

/**
 * Encrypt data with RSA
 */
export default async function encryptData() {
    const crypt = new JSEncrypt({ default_size: 512 });
    crypt.setPublicKey(textAreaRsaPrivate.value);
    let text = textAreaInput.value;
    let enc = crypt.encrypt(text);
    let dec = crypt.decrypt(enc);
    try {
        if (dec === text) {
            let tplEnc = `Encrypted with 512bit: \n----------------------------\n${enc}\n----------------------------`;
            textAreaOutput.value = tplEnc;
            let tplDec = `Decrypted to: \n----------------------------\n${dec}\n----------------------------`;
            textAreaDecrypted.value = tplDec;
            textAreaRsaPublic.value = crypt.getPublicKey();
        } else {
            textAreaOutput.value = 'Something went wrong....';
        }
    } catch (error) {
        textAreaOutput.value = 'Something went wrong: ' + error;
    }
}
