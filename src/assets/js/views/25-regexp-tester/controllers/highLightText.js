import {output,msg,regexInput} from './vars.js';

export default function highlightText() {
    msg.textContent = '';
    msg.className = '';
    try {
        const regexString = regexInput.value;
        const lastIndex = regexString.lastIndexOf('/');
        const pattern = regexString.slice(1, lastIndex);
        const flags = regexString.slice(lastIndex + 1);
        const regex = new RegExp(pattern, flags);
        const text = output.textContent;
        const highlightedText = text.replace(regex, '<span>$&</span>');
        output.innerHTML = highlightedText;
        msg.textContent = 'Info: Good job!';
        msg.className = 'success';
    } catch (err) {
        msg.textContent = `Error: ${err.message}`;
        msg.className = 'error';
    }
}
