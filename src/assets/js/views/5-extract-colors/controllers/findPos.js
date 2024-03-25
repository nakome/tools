export default function findPos(obj) {
    let x = 0, y = 0;
    if (obj.offsetParent) {
        do {
            x += obj.offsetLeft;
            y += obj.offsetTop;
        } while (obj = obj.offsetParent);
        return { x: x, y: y };
    }
    return undefined;
}