const prompt = require('prompt-sync')({sigint: true});
//var inpyear = Math.floor((Math.random()*9000))+1000;
const inpyear=prompt("Enter a year:");

//console.log("Year "+inpyear);
if(inpyear%400==0) {
	console.log(inpyear+" is leap year");
}
else if (inpyear%100==0) {
	console.log(inpyear+" not a leap year");
}
else if (inpyear%4==0) {
	console.log(inpyear+" is leap year");
} else {
	console.log(inpyear+" not a leap year");
}

