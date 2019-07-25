const replaceOnDocument = (pattern, string, {target = document.body} = {}) => {
  [target, ...target.querySelectorAll("*:not(script):not(noscript):not(style)")]
    .forEach(({childNodes: [...nodes]}) => nodes
    .filter(({nodeType}) => nodeType === document.TEXT_NODE)
    .forEach((textNode) => textNode.textContent = textNode.textContent.replace(pattern, string)))
}
const fixBranding = () => {
  // replace text for overly utilized microsoft prefix
  replaceOnDocument(/Microsoft Azure/g, 'Azure')
  // add azure logo to home link
  document.querySelector('.fxs-topbar-home').innerHTML = `
    <svg height="60" width="60" viewBox="0 0 161.67 129" xmlns="http://www.w3.org/2000/svg"><path d="m88.33 0-47.66 41.33-40.67 73h36.67zm6.34 9.67-20.34 57.33 39 49-75.66 13h124z" fill="#ffffff"/></svg>
    <span class="fxs-topbar-branding-product">Azure</span>
    <span class="fxs-topbar-branding-text">Your vision. Your cloud.</span>
  `
}
window.addEventListener('load', fixBranding)
window.addEventListener('onhashchange', fixBranding)
