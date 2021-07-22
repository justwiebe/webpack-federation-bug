import 'app_a/RemoteA';
import 'app_b/RemoteB';
import { clone } from 'lodash-es';

console.log('container app', clone({ a: 'b', c: 'd' }))

document.getElementById('root').innerText = 'Loaded without error';
