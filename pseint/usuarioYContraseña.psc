Algoritmo logIn
	Definir usuario Como Caracter;
	Definir contraseña Como Entero;
	
	usuario= " ";
	contraseña= 0;
	
	Mostrar "Ingrese su usuario:";
	Leer usuario;
	Mostrar "Ingrese su contraseña:";
	Leer contraseña;
	
	Si ((usuario="pepe")) Entonces
		Si ((contraseña=1234)) Entonces
			Escribir "Iniciando sesion.."
		Sino
			Escribir "Contraseña invalida"
			
		Fin Si
	Sino
		Si ((contraseña!=1234)) Entonces
			Escribir "Datos invalidos"
		Sino
			Escribir "Usuario invalido"
		Fin Si
	Fin Si
	
	
FinAlgoritmo
