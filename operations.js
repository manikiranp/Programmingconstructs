var prompt = require('prompt-sync')({sigint: true});
var i;
var arr=[];
console.log("Enter three numbers:");
for (i=0; i<3; i++) {
	var num=prompt();
	arr.push(num);
}
arr.sort(function(a,b){return a-b});
console.log("Maximum: "+arr[2]);
console.log("Minimum: "+arr[0]);
const a1=arr[0]+arr[1]*arr[2];
const a2=arr[0]%arr[1]+arr[2];
const a3=arr[2]+arr[0]/arr[1];
const a4=arr[0]*arr[1]+arr[2];
console.log(arr[0]+'+'+arr[1]+'*'+arr[2]+'='+a1);
console.log(arr[0]+"%"+arr[1]+"+"+arr[2]+'='+a2);
console.log(arr[2]+'+'+arr[0]+"/"+arr[1]+'='+a3);
console.log(arr[0]+'*'+arr[1]+"/"+arr[2]+'='+a4);