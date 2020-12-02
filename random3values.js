var prompt = require('prompt-sync')({sigint: true});
var numbers=[];
var i;

console.log("Enter 5 numbers:");
for (i=0; i<5; i++) {
	var num=prompt();
	numbers.push(num);
}
//console.log("Random 5 three digit numbers\n"+numbers);
numbers.sort(function(a,b){return a-b});
//console.log(numbers);
console.log("Maximum number:"+numbers[4]);
console.log("Minimum number:"+numbers[0]);