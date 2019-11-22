/*
* ************************************************************
* @Version: 1.0.0.0
* @Archivo: FnValidaRequeridos.js
* ************************************************************
* @Autor: JAlberto-Coder
* @Fecha: 05-05-2019
* @Descrpcion: Generación de una funcion que valide campos conforme las expresiones más comunes
* ************************************************************
*/
function FnValidaRequeridos(Cadenas) {
	// Recordar que el separador de esta cadena es punto y coma ";"
	var ExisteError = false;
	if (Cadenas === "" || Cadenas === undefined || Cadenas === null || Cadenas.length < 1) {
		ExisteError = true;
		return {"Estatus": false, "Mensaje": "No se ha enviado ninguna cadena a validar"};
	} else {
		var arrayCadenas = Cadenas.split(";");
		for (var i = 0; i < arrayCadenas.length; i ++) {
			if (arrayCadenas[i] === "" || arrayCadenas[i] === null || arrayCadenas[i] === undefined) {
				ExisteError = true;
			}
		}
		if (ExisteError === true) {
			return {"Estatus": false, "Mensaje": "Hay parámetros requeridos que no se han completado"};
		} else {
			return {"Estatus": true};
		}
	}
}
