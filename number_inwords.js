//var num = Math.floor(Math.random()*10);
var prompt = require('prompt-sync')({sigint: true});
var num=prompt("Enter a digit:");
var digits=['zero','one','two','three','four', 'five','six','seven','eight','nine'];
var len=num.toString().length;

if(len > 1) {
	console.log("Enter a single digit");
}else 
console.log(num+"\nin words: "+digits[num]);

