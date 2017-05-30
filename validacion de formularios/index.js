function isLetter(str){
	return str.length === 1 && str.match(/[a-z]/i);
}

function enviar() {
	var campos=["nombre", "apellido", "telefono","email", "edad"];
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var edad = document.getElementById('edad').value;
	var telefono = document.getElementById('telefono').value;
	var valido = true;

	for(var i = 0; i < nombre.length; i++){
		if (!isLetter(nombre[i])){
			valido = false;
			break;
		}
	}
	for(var i = 0; i < apellido.length; i++){
		if(!isLetter(apellido[i])){
			valido = false;
			break;
		}
	}
	if(edad <= 21){
		alert("Debes tener más de 21 años para acceder");
	}

	for(var i = 0; i < telefono.length; i++){
		if (isNaN(telefono[i])){
			alert("El telefono no puede contener caracteres");
			break;
		}
	}
	
	if (telefono.length!= 8 && telefono.length!=12){
		alert("nope");
	}

	if(!valido){
		alert('Tu nombre solo puede contener letras');
		valido=true;
	}
	for (var i = 0; i < campos.length; i++) {
		var valorCampo = document.getElementById(campos[i]).value;
		if (valorCampo == null || valorCampo.length == 0){
			alert("Tenes que ingresar tu " + campos[i]);
		}		
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