var day = Math.floor((Math.random()*31)+1);
var month = Math.floor((Math.random()*12)+1);
let d=new Date;
console.log("Date: "+day+"/"+month+"/"+d.getFullYear());
if (month<3 || month>6) {
	console.log("False"); }
else if((day<20 && month==3) || (day>20 && month==6)) {
	console.log("False");
}
  else  console.log("True"); {
}
