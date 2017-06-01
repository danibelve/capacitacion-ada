	var campos=["nombre","apellido","telefono","email","edad"];
	/*
	ESTO PIERDE SENTIDO AL MANEJARSE CON EL ARRAY QUE AGARRA EL VALOR ENTRE COMILLAS
	DENTRO DEL FOR(*)
	var nombre = document.getElementById('nombre').value;
	var apellido = document.getElementById('apellido').value;
	var telefono = document.getElementById('telefono').value;
	var email = document.getElementById('email').value;
	var edad = parseInt(document.getElementById('edad').value);*/
	var warning = document.getElementById('alert');
	var errorHtml= document.getElementById('error');
	//

function enviar(nombre,apellido,telefono,email,edad){
	
		/* EL FOR EVITA ESTO :
			if(!campoVacio(nombre) && !campoVacio(apellido) && !campoVacio(telefono) && !campoVacio(email)
				&& !campoVacio(email))*/

				for(var i = 0; i <campos.length; i++){
					//(*)POR ESTO PIERDE SENTIDO LA DECLARACION UNA POR UNA
					var valorCampo = document.getElementById(campos[i]).value;
					if (valorCampo == null || valorCampo.length == 0){
						warning.style.display = "block";
						errorHtml.style.display = "block";
						errorHtml.innerHTML = "Completar <strong>todos</strong> los campos";
					}else{
						if(!texto(campos[i=0])){	
							errorHtml.innerHTML += "<li>El texto no puede tener números</li>";
						}
						if(!texto(campos[i=1])){
							errorHtml.innerHTML += "<li>El texto no puede tener números</li>";
						}
						/*
						TODAVÍA NO FUNCIONA, TENGO QUE MODIFICAR LA FUNCION Y HACERLA CON UN FOR
						if(!tel(telefono)){
							errorHtml.innerHTML += "<li>Entre 8 y 12 números.</li>";
						}
						*/
						if (!mailValido(campos[i=3])){
							errorHtml.innerHTML += "<li>Formato invalido</li>";
						}
						if (!mayor(campos[i=4])){
							errorHtml.innerHTML += "<li>Tenés que ser mayor a 21 años</li>";
						}

					}
					
					
				}				
				return false;




		

}// fin funcion



function texto(x){
	var valido = /^([a-zA-Z\s]{4,50})*$/;
		if (valido.test(x)){
			return true;
		}
			warning.style.display = "block";
			errorHtml.style.display = "block";
			
	return false;
}
/*
  ESTO TENGO QUE CHEQUEARLO, TODAVÍA SE ROMPE UN POCO, VOY A INTENTARLO CON UN FOR Y EL ARRAY:
	function tel(x){
	if ((x.length >= 8 && x.length<=12)&& (!isNaN(x))) {
		return true;
	}

		warning.style.display = "block";
		errorHtml.style.display = "block";
	return false;
}*/
function mayor(x){
	if(parseInt(x>=21)&&(parseInt(x===0))&& isNaN(x)) {
		return true;
	}
		warning.style.display = "block";
		errorHtml.style.display = "block";

	return false;
}	

function mailValido(x){
	expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (expr.test(x) ){
    	return true;
    }   
    	warning.style.display = "block";
		errorHtml.style.display = "block";

    return false;
}
