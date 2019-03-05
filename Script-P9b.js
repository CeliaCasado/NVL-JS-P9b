	//Aquí pongo las variables de cadena y las convierto en arrays especificando su caracter de ruptura
	var semana = "Lunes,Martes,Miercoles,Jueves,Viernes,Sabado,Domingo";
	semana = semana.split(",");

	var ciudad = "Madrid.Sevilla.Barcelona.Valencia.Zaragoza.Bilbao.Donosti";
	ciudad = ciudad.split(".");

	//Aquí creo un nuevo array combinando las posiciones de los dos anteriores empezando por la primera posición de cada matriz
	var conciertos = [[semana[0], ciudad[0]]]

	//Ahora añado una a una las demás posiciones al nuevo array
	conciertos.push([semana[1], ciudad[1]]);
	conciertos.push([semana[2], ciudad[2]]);
	conciertos.push([semana[3], ciudad[3]]);
	conciertos.push([semana[4], ciudad[4]]);
	conciertos.push([semana[5], ciudad[5]]);
	conciertos.push([semana[6], ciudad[6]]);

	//Por último indico que se escriba la matriz conciertos
	document.write(conciertos);