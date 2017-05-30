function isLetter(str){
	return str.length === 1 && str.match(/[a-z]/i);
}

function enviar() {
	var campos=["nombre", "email", "password"];

	for (var i = 0; i < campos.length; i++) {
		var valorCampo = document.getElementById(campos[i]).value;
		if (valorCampo == null || valorCampo.length == 0){
			alert("Tenes que ingresar tu " + campos[i]);
		}		
	}

	var nombre = document.getElementById('nombre').value;
	var valido = true;

	for(var i = 0; i < nombre.length; i++){
		if (!isLetter(nombre[i])){
			valido = false;
			break;
		}
	}

	if(!valido){
		alert('Tu nombre solo puede contener letras');
	}
}
/*
function operacionRara(cadena) {
	cadena= cadena + 2;
	cadena= cadena * 3;

	console.log("El valor final es: " + cadena);
}
var cadena=""

for (;cadena!= "exit";){
	cadena = prompt("Ingrese un numero");
	operacionRara(cadena);
}
*/