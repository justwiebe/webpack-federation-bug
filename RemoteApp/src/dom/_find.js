function find (selector) {
  return toArray(document.querySelectorAll(`${evalLazy(selector)}`));
}

function toArray (nodes) {
  return [].slice.call(nodes);
}

function evalLazy (param) {
  return typeof param === 'function' ? param() : param;
}

export { find };
