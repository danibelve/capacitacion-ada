Algoritmo logIn
	Definir usuario Como Caracter;
	Definir contrase�a Como Entero;
	
	usuario= " ";
	contrase�a= 0;
	
	Mostrar "Ingrese su usuario:";
	Leer usuario;
	Mostrar "Ingrese su contrase�a:";
	Leer contrase�a;
	
	Si ((usuario="pepe")) Entonces
		Si ((contrase�a=1234)) Entonces
			Escribir "Iniciando sesion.."
		Sino
			Escribir "Contrase�a invalida"
			
		Fin Si
	Sino
		Si ((contrase�a!=1234)) Entonces
			Escribir "Datos invalidos"
		Sino
			Escribir "Usuario invalido"
		Fin Si
	Fin Si
	
	
FinAlgoritmo
