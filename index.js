const EXPANDED_STATE = 'data-expanded';
const EXPANDER_SOURCE = 'data-expand-source';

window.addEventListener('click', ev => {
  const expander_element = ev.composedPath().find(a => a.dataset && a.dataset.expandTarget);
  
  if (!expander_element) {
    return;
  }

  const expander_target = document.querySelector(`[${EXPANDER_SOURCE}=${expander_element.dataset.expandTarget}]`);
  
  if (!expander_target) {
    return console.warn(`No expander target found for ${expander_element.dataset.expandTarget}`);
  }

  expander_target.hasAttribute(EXPANDED_STATE) 
    ? collapse(expander_target, expander_element)
    : expand(expander_target, expander_element);
});

function expand (target, source) {
  target.setAttribute(EXPANDED_STATE, '');
  source.setAttribute(EXPANDED_STATE, '');
}

function collapse (target, source) {
  target.removeAttribute(EXPANDED_STATE);
  source.removeAttribute(EXPANDED_STATE);
}