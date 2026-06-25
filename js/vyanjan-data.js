const vyanjanData = [];

for(let i=1;i<=41;i++){

let num =
String(i).padStart(2,"0");

vyanjanData.push({

letter:"",

pronunciation:"",

image:`assets/vyanjan/vyanjan${num}.png`,

audio:`assets/audio/vyanjan/vyanjan${num}.mp3`

});

}
