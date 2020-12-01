

var numbers=[];
var i;

for (i=0; i<5; i++) {
	numbers.push(Math.floor((Math.random()*900))+100);
}
console.log("Random 5 three digit numbers\n"+numbers);
numbers.sort();
console.log("Maximum number:"+numbers[4]);
console.log("Minimum number:"+numbers[0]);