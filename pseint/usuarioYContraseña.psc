Algoritmo logIn
	Definir usuario Como Caracter;
	Definir contraseņa Como Entero;
	
	usuario= " ";
	contraseņa= 0;
	
	Mostrar "Ingrese su usuario:";
	Leer usuario;
	Mostrar "Ingrese su contraseņa:";
	Leer contraseņa;
	
	Si ((usuario="pepe")) Entonces
		Si ((contraseņa=1234)) Entonces
			Escribir "Iniciando sesion.."
		Sino
			Escribir "Contraseņa invalida"
			
		Fin Si
	Sino
		Si ((contraseņa!=1234)) Entonces
			Escribir "Datos invalidos"
		Sino
			Escribir "Usuario invalido"
		Fin Si
	Fin Si
	
	
FinAlgoritmo
