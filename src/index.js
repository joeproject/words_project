import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Speech from './components/Speech.js';
import registerServiceWorker from './registerServiceWorker';

window.addEventListener("load", function(){
  const recognition = Speech();
  const listen = function(){
    recognition.start();
    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      const textContent = speechToText || '';
      ReactDOM.render(<h1> {textContent} </h1>, document.getElementById('root'));
      registerServiceWorker();
    }
  }
  listen();
  window.addEventListener("click", listen);
});
