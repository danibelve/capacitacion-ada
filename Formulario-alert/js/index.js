	var campos=["nombre","apellido","telefono","email","edad"];
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var telefono = document.getElementById('telefono').value;
	var email = document.getElementById('email').value;
	var edad = parseInt(document.getElementById('edad').value);
	var warning = document.getElementById('alert');
	var errorHtml= document.getElementById('error');

	
function validarNombre(e){
		if(nombre.value == '' || nombre.value == null){
			console.log('Por favor, completa el nombre');
			warning.style.display = 'block';
			errorHTML.innerHTML += '<li>Por favor completa el nombre</li>';
			e.preventDefault();
		} 
		else{
			if(!isLetter(nombre)){
				console.log('Nombre con números');
				warning.style.display = 'block';
				errorHTML.innerHTML += '<li>Por favor, no utilices números en tu nombre</li>';
				e.preventDefault();
			}
				warning.style.display = 'none';
				errorHTML.style.display = 'none';
		}
}
function validarCorreo(e){
		if(correo.value == '' || correo.value == null){
			console.log('Por favor completa el correo');
			warning.style.display = 'block';
			errorHTML.innerHTML += '<li>Por favor completa el correo</li>';
			e.preventDefault();
		} else {
			if(!mailValido()
			error.style.display = 'none';
		}
}


//VOLVER A UTILIZAR LA EXPRESION isLetter
function isLetter(str){
	return str.length === 1 && str.match(/^[a-zA-Z\s]*$/i);
}


function mailValido(x){
	var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (expr.test(x) ){
    	return true;
    }   
    return false;
}





/*
function texto(x){
	for(var i = 0; i < x.length; i++){
		if (isLetter(x[i])){
			return true;
			break;
		}
		return 
	}
}*/

/*
  ESTO TENGO QUE CHEQUEARLO, TODAVÍA SE ROMPE UN POCO, VOY A INTENTARLO CON UN FOR Y EL ARRAY:
	function tel(x){
	if ((x.length >= 8 && x.length<=12)&& (!isNaN(x))) {
		return true;
	}

		warning.style.display = "block";
		errorHtml.style.display = "block";
	return false;
}
function mayor(x){
	if(parseInt(x>=21)&&(parseInt(x===0))&& isNaN(x)) {
		
		warning.style.display = "none";
		errorHtml.style.display = "none";
		return true;
	}
		warning.style.display = "block";
		errorHtml.style.display = "block";

	return false;
}	
*/

