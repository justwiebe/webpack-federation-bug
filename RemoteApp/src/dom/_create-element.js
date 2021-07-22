import { isElement } from 'lodash';

export function createElement (tagName) {
  const element = document.createElement(tagName);

  if (isElement(element)) {
    return element;
  }
  return null;
}
