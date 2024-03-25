// convert rgba to hex
// http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export default function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}