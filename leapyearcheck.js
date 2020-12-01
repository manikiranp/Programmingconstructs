<html>
<body>
<script>
var inpyear = Math.floor((Math.random()*9000))+1000;
console.log("Year "+inpyear);
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

</script>
</body>
</html>
