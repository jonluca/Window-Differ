/**
 * Injects a <script> into the main page, with full access to `window` vars.
 *
 * @param {string} filePath - absolute file path to script being injected
 * @param {string} tag - tag that it should be injected under, i.e. 'head', 'body'
 */
function injectScript(filePath, tag) {
  const node = document.getElementsByTagName(tag)[0];
  const script = document.createElement('script');
  script.async = false;
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', filePath);
  node.appendChild(script);
}

injectScript(chrome.extension.getURL('js/object_hash.js'), 'head');
injectScript(chrome.extension.getURL('js/page_script.js'), 'head');
