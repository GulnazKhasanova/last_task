import { getRandomColor } from './utils';
export default function initApp() {
    const button = document.createElement('button');
    button.className = 'button'
    document.body.append(button);
    console.log('Hello world');
  }
  getRandomColor()