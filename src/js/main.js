import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const typed = new Typed('#heading', {
  strings: ["I am product designer", "Software Engineer", "and A cat"],
  typeSpeed: 50,
  backSpeed: 98,
  cursorChar:" ",
  loop: true,
});

const form = document.getElementById("form");
form.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        const myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);
        confetti.create(myCanvas, {
            resize: true,
            useWorker: true
          });
        confetti({
            particleCount: 1000,
            spread: 160,
          });
          myCanvas.remove();
    }
});