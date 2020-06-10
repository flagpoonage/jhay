const EXPANDED_STATE = 'data-expanded';

window.addEventListener('click', ev => {
  const expander_element = ev.composedPath().find(a => a.dataset && a.dataset.expandTarget);
  
  if (!expander_element) {
    return;
  }

  const expander_target = document.querySelector(`[data-expand-source=${expander_element.dataset.expandTarget}]`);
  
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
  source.setAttribute('title', source.dataset.expandedTitle);
  source.querySelector('svg title').innerHTML = source.dataset.expandedTitle;
}

function collapse (target, source) {
  target.removeAttribute(EXPANDED_STATE);
  source.removeAttribute(EXPANDED_STATE);
  source.setAttribute('title', source.dataset.collapsedTitle);
  source.querySelector('svg title').innerHTML = source.dataset.collapsedTitle;
}