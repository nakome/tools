/**
 * Check if the user agent indicates that the device is a mobile device.
 *
 * @return {boolean} true if the device is a mobile device, false otherwise
 */
export default function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}