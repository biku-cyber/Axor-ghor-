const numberData = [];

for(let i=1;i<=100;i++){

let num =
String(i).padStart(3,"0");

numberData.push({

letter:String(i),

pronunciation:String(i),

image:`assets/numbers/number${num}.png`,

audio:`assets/audio/numbers/number${num}.mp3`

});

}
