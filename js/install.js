let deferredPrompt;

window.addEventListener(
"beforeinstallprompt",
e=>{

e.preventDefault();

deferredPrompt = e;

const btn =
document.getElementById(
"installBtn"
);

btn.style.display="block";

btn.addEventListener(
"click",
async()=>{

deferredPrompt.prompt();

const result =
await deferredPrompt.userChoice;

deferredPrompt=null;

btn.style.display="none";

}
);

});
