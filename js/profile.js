const swaraProgress =
parseInt(
localStorage.getItem(
"swara_progress"
)
) || 0;

const vyanjanProgress =
parseInt(
localStorage.getItem(
"vyanjan_progress"
)
) || 0;

const numberProgress =
parseInt(
localStorage.getItem(
"numbers_progress"
)
) || 0;


/* Percentage */

const swaraPercent =
Math.floor(
(swaraProgress/11)*100
);

const vyanjanPercent =
Math.floor(
(vyanjanProgress/41)*100
);

const numberPercent =
Math.floor(
(numberProgress/100)*100
);

document
.getElementById(
"swaraPercent"
).innerText =
swaraPercent+"%";

document
.getElementById(
"vyanjanPercent"
).innerText =
vyanjanPercent+"%";

document
.getElementById(
"numberPercent"
).innerText =
numberPercent+"%";


/* Achievements */

const achievementList =
document.getElementById(
"achievementList"
);

let achievements=[];

if(swaraProgress>=1){

achievements.push(
"⭐ First Lesson Completed"
);

}

if(swaraProgress>=11){

achievements.push(
"🏆 Swara Master"
);

}

if(vyanjanProgress>=41){

achievements.push(
"🎖 Vyanjan Master"
);

}

if(numberProgress>=100){

achievements.push(
"🥇 Number Champion"
);

}

if(
swaraProgress>=11 &&
vyanjanProgress>=41 &&
numberProgress>=100
){

achievements.push(
"👑 Akhor Ghor Champion"
);

}

if(achievements.length===0){

achievements.push(
"Start Learning To Unlock Badges"
);

}

achievements.forEach(item=>{

const badge =
document.createElement("div");

badge.className =
"badge";

badge.innerText =
item;

achievementList.appendChild(
badge
);

});


/* Reset Progress */

document
.getElementById(
"resetBtn"
)
.addEventListener(
"click",
()=>{

const confirmReset =
confirm(
"Reset all progress?"
);

if(confirmReset){

localStorage.removeItem(
"swara_progress"
);

localStorage.removeItem(
"vyanjan_progress"
);

localStorage.removeItem(
"numbers_progress"
);

location.reload();

}

}
);


/* Dark Mode */

const darkToggle =
document.getElementById(
"darkMode"
);

if(
localStorage.getItem(
"darkMode"
)==="true"
){

document.body.classList.add(
"dark-mode"
);

darkToggle.checked=true;

}

darkToggle.addEventListener(
"change",
()=>{

document.body.classList.toggle(
"dark-mode"
);

localStorage.setItem(

"darkMode",

darkToggle.checked

);

}
);


/* Sound Setting */

const soundToggle =
document.getElementById(
"soundToggle"
);

if(
localStorage.getItem(
"soundEnabled"
)==="false"
){

soundToggle.checked=false;

}

soundToggle.addEventListener(
"change",
()=>{

localStorage.setItem(

"soundEnabled",

soundToggle.checked

);

}
);
