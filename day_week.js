var num = Math.floor(Math.random()*7)+1;
var prompt=require('prompt-sync')();
var inp =prompt("Enter anything:");
console.log('Hey u entered '+inp);
var day=['Sunday','Monday','Wednesday','Tuesaday','Thursday','Friday','Saturday'];
console.log(num+"\nWeek day: "+day[num-1]);