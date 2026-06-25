const params =
new URLSearchParams(
window.location.search
);

const type =
params.get("type");

let index =
parseInt(
params.get("index")
) || 0;

let lessonData=[];

if(type==="swara"){
lessonData=swaraData;
}

if(type==="vyanjan"){
lessonData=vyanjanData;
}

if(type==="numbers"){
lessonData=numberData;
}

const image =
document.getElementById(
"lessonImage"
);

const letter =
document.getElementById(
"lessonLetter"
);

const pronunciation =
document.getElementById(
"lessonPronunciation"
);

const progressBar =
document.getElementById(
"progressBar"
);

const currentCount =
document.getElementById(
"currentCount"
);

const totalCount =
document.getElementById(
"totalCount"
);

totalCount.innerText =
lessonData.length;

function renderLesson(){

let item =
lessonData[index];

image.src =
item.image;

letter.innerText =
item.letter;

pronunciation.innerText =
item.pronunciation;

currentCount.innerText =
index+1;

let progress =
((index+1)/
lessonData.length)*100;

progressBar.style.width =
progress+"%";

saveProgress();

}

renderLesson();

function saveProgress(){

localStorage.setItem(

`${type}_progress`,

index+1

);

}

document
.getElementById("nextBtn")
.addEventListener(
"click",
()=>{

if(
index <
lessonData.length-1
){

index++;

renderLesson();

}
else{

showCompletion();

}

}
);

document
.getElementById("prevBtn")
.addEventListener(
"click",
()=>{

if(index>0){

index--;

renderLesson();

}

}
);

document
.getElementById("soundBtn")
.addEventListener(
"click",
()=>{

const soundEnabled =
localStorage.getItem(
"soundEnabled"
);

if(soundEnabled==="false"){
return;
}

let audio =
new Audio(
lessonData[index].audio
);

audio.play();

}
);

function showCompletion(){

let nextCategory="";

if(type==="swara"){
nextCategory="vyanjan";
}

else if(type==="vyanjan"){
nextCategory="numbers";
}

document.body.innerHTML=`

<div class="complete-screen">

<h1>
🎉 Great Job!
</h1>

<p>
You completed ${type}
</p>

<button
onclick="
window.location.href='index.html'
">

Home

</button>

${
type!=="numbers"

?

`<button
onclick="
window.location.href='${nextCategory}.html'
">
Next
</button>`

:

`<button
onclick="
window.location.href='numbers.html'
">
Learn Again
</button>`
}

</div>

`;

}
