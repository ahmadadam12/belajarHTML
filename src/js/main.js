import Typed from 'typed.js';
import confetti from 'canvas-confetti';

const container = document.getElementById("container");

const typed = new Typed('#heading', {
  strings: ["Modern Web Development"],
  typeSpeed: 50,
  backSpeed: 98,
  cursorChar:" ",
  loop: true,
});

const typed2 = new Typed('#heading2', {
    strings: ["Data Science"],
    typeSpeed: 50,
    backSpeed: 98,
    cursorChar:" ",
    loop: true,
  });

const typed3 = new Typed('#heading3', {
    strings: ["Product Design"],
    typeSpeed: 50,
    backSpeed: 98,
    cursorChar:" ",
    loop: true,
  });

const subscribe = document.getElementById("subscribe");
var counter = 0;
var subscribeInput;

subscribe.addEventListener("click",()=>{
    if(counter === 0){
        const subscribeDescription = document.createElement("h3");
        subscribeInput = document.createElement("input");
    
        subscribeDescription.textContent="Input Your Email: "
        subscribeInput.id="form";
    
        container.append(subscribeDescription,subscribeInput);

        counter = 1;
    } else{
    }
})


// const form = document.getElementById("form");
container.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        var myCanvas = document.createElement('canvas');
        document.body.appendChild(myCanvas);
        confetti.create(myCanvas, {
            resize: true,
            useWorker: true
          });
        confetti({
            particleCount: 500,
            spread: 300,
          });
          myCanvas.remove();
    }
});