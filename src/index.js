import _ from 'lodash';
import {makeMagic} from './magic_message';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
}

export function handleMagic() {
  var span = document.getElementById('magic');
  span.innerText = makeMagic(span.innerText);
}
  
document.body.appendChild(component());
