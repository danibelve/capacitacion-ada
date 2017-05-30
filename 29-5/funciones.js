
function suma(num1,num2){
	var num1= parseInt(document.getElementById("num1").value);
	var num2= parseInt(document.getElementById("num2").value);
	var resultado = num1 + num2;
	 document.getElementById("salida").innerHTML += resultado;
}
function resta(){
	var num1= parseInt(document.getElementById("num1").value);
	var num2= parseInt(document.getElementById("num2").value);
	var resultado = num1 - num2;
	 document.getElementById("salida").innerHTML += resultado;
}
function division(){
	var num1= parseInt(document.getElementById("num1").value);
	var num2= parseInt(document.getElementById("num2").value);
	var resultado = num1 / num2;
	 document.getElementById("salida").innerHTML += resultado;
}

