function launchConfetti(){

for(let i=0;i<80;i++){

let confetti =
document.createElement(
"div"
);

confetti.className=
"confetti";

document.body.appendChild(
confetti
);

setTimeout(()=>{

confetti.remove();

},3000);

}

}
