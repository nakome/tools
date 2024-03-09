import isMobile from "./isMobile.js";

/**
 * Creates a modal window with the specified configuration.
 *
 * @param {Object} args - The configuration object for the modal window.
 * @return {WinBox} The newly created modal window.
 */
/**
 * Function to create a modal window with the given arguments.
 *
 * @param {object} args - An object containing configuration options for the modal window.
 * @return {WinBox} A new instance of WinBox representing the modal window.
 */
export default function createModalWindow(args) {
  return new WinBox({
    id: args.id ?? "settings-window",
    root: document.body,
    // appearance:
    title: args.title ?? "Options",
    // initial state:
    modal: args.modal ?? true,
    max: isMobile() ? true : false,
    // position:
    x: args.x ?? 'center',
    y: args.y ?? 'center',
    width: args.width ?? "70%",
    height: args.height ?? "70%",
    html: args.html ?? "nothing",
    // callbacks:
    oncreate: args.oncreate ?? false,
    onshow: args.onshow ?? false,
    onresize: args.onresize ?? false,
    onclose: args.onclose ?? false,
  });
}
