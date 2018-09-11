const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

const Speech = () => {
  return new SpeechRecognition();
}

export default Speech;
