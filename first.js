alert("That was quite brave of you.");
var a = prompt ("Please enter the first number:");
var b = prompt ("Please enter the second number:");
var x = Number(a);
var y = Number(b);
document.write('Yup, this is my "script" already.<br/><br/>');
document.write("Our first number is now " + x + ", and second one is " + y + ". Now we\'\ll see: <br/><br/>");

/*decided to separate some lines to make the code more readable for myself*/ 

document.write("Their sum: ");
if ((x+y) > 9000){
	document.write("is over 9000!!!")
}
else{
	document.write(x+y);
}

document.write("<br/><br/>Their difference: ");
if ((x-y) > 9000){
	document.write("is over 9000!!!")
}
else{
	document.write(x-y)
}

document.write("<br/><br/>Their multiplication: ");
if ((x*y) > 9000){
	document.write("is over 9000!!!");
}
else{
	document.write(x*y)
}

document.write("<br/><br/>Their division: ");
if ((x/y) > 9000){
	document.write("is over 9000!!!")
}
else{
	document.write(x/y)
}

