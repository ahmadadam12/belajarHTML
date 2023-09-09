import Typed from 'typed.js';
// import confetti from 'canvas-confetti';

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



// const form = document.getElementById("form");
// form.addEventListener("keydown",(e)=>{
//     if(e.key==="Enter"){
//         const myCanvas = document.createElement('canvas');
//         document.body.appendChild(myCanvas);
//         confetti.create(myCanvas, {
//             resize: true,
//             useWorker: true
//           });
//         confetti({
//             particleCount: 1000,
//             spread: 160,
//           });
//           myCanvas.remove();
//     }
// });