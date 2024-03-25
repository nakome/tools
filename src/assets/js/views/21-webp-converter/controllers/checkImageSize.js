const checkImageSize = (dataURI) => {
    const localStorageSize = 4 * 1024 * 1024; // 4 MB
    const dataSize = dataURI.length * 0.75;
    if (parseInt(dataSize) > parseInt(localStorageSize)) {
        alert(`The size of the image exceeds the local storage quota.`);
        return false;
    }
    return true;
};

export default checkImageSize;