const grid =
document.getElementById(
"dashboardGrid"
);

/* ------------------ */
/* SWARA */
/* ------------------ */

if(dashboardType==="swara"){

for(let i=1;i<=11;i++){

const card =
document.createElement("div");

card.className =
"dashboard-card";

let num =
String(i).padStart(2,"0");

card.innerHTML=`

<img
src="assets/swara/swara${num}.png">

<span>${i}</span>

`;

grid.appendChild(card);

}

}

/* ------------------ */
/* VYANJAN */
/* ------------------ */

if(dashboardType==="vyanjan"){

for(let i=1;i<=41;i++){

const card =
document.createElement("div");

card.className =
"dashboard-card";

let num =
String(i).padStart(2,"0");

card.innerHTML=`

<img
src="assets/vyanjan/vyanjan${num}.png">

<span>${i}</span>

`;

grid.appendChild(card);

}

}

/* ------------------ */
/* NUMBERS */
/* ------------------ */

if(dashboardType==="numbers"){

for(let i=1;i<=100;i++){

const card =
document.createElement("div");

card.className =
"dashboard-card";

let num =
String(i).padStart(3,"0");

card.innerHTML=`

<img
src="assets/numbers/number${num}.png">

<span>${i}</span>

`;

grid.appendChild(card);

}

}

/* ------------------ */
/* Learning Button */
/* ------------------ */

function startLearning(type){

window.location.href =
`lesson.html?type=${type}&index=0`;

}
