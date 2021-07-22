import { createElement } from '../dom';

// Just to make sure that `createElement` is accessed after remote B is
setTimeout(() => {
  console.log('Remote A', createElement('div'))
}, 50)
