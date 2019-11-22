/*
* ************************************************************
* @Version:  1.0.0.0
* @Archivo: FnValidaExpresiones.js
* ************************************************************
* @Autor: JAlberto-Coder
* @Fecha: 05-05-2019
* @Descrpcion: Generación de una funcion que valide campos conforme las expresiones más comunes
* ************************************************************
*/
function FnValidaExpresiones(TipoDato, Valor) {
	var RexpCP = /^[0-9]{5}$/;
	var RexpMoneda = /^\d+(\.\d+)?$/;
	var RexpRFCMoral = /^([A-Za-z|Ññ|&]{3})(([0-9]{2})([0][123456789]|[1][012])([0][1-9]|[12][0-9]|[3][01]))([A-Za-z|0-9|Ññ]{3})$/;
	var RexpRFCFisica = /^([A-Za-z|Ññ|&]{4})(([0-9]{2})([0][123456789]|[1][012])([0][1-9]|[12][0-9]|[3][01]))([A-Za-z|0-9|Ññ]{3})$/;
	var RexpUUID = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
	var RexpCURP = /^[A-Z]{1}[AEIOUX]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$/;
	var RexpEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var RexpTelefono = /^[(]{1}[0-9]{2}[)]{1}[ 0-9]{5}[-][0-9]{4}$/;
	var RexpClaveEstado = /^[a-zA-Z]{2,3}$/;
	var RexpFecha = /^\d{4}-\d{2}-\d{2}$/;
	var ThisTipoDato = TipoDato; // Parametro de entrada
	var ThisValor = Valor; // Parametro de entrada
	
	function EvaluarExpresion(Expresion, Valor) {
		var Result = false;
		if (Expresion !== undefined && Valor !== undefined)
		Result = Expresion !== null && Valor !== null ? Expresion.test(Valor) : false;
		return Result;
	}
	
	if (TipoDato === null && TipoDato === undefined && TipoDato.length === 0 || Valor === null && Valor === undefined && Valor.length === 0) {
		return {"Estatus": false, "Codigo": 403, "Mensaje":"Los Parametros SetValor, SetTipoDato son requeridos"};
	} else {
		switch (ThisTipoDato) {
			case "Email":
				var Mails = ThisValor.split(";"), errF = 0, stValido;
				for (var idValue = 0; idValue < Mails.length; idValue++) {
					stValido = EvaluarExpresion(RexpEmail, Mails[idValue]);
					if (!stValido)
					errF++;
				}
				return {"Estatus": errF === 0, "Mensaje": "Email ¡formato incorrecto! (formato ejemplo: correo@dominio.com)"};
				break;
			case "RFC":
				return {"Estatus": EvaluarExpresion(ThisValor.length === 12 ? RexpRFCMoral : RexpRFCFisica, ThisValor), "Mensaje": "RFC ¡formato incorrecto! formato ejemplo: XAXX010101000)"};
			break;
			case "CURP":
				return {"Estatus": EvaluarExpresion(RexpCURP, ThisValor), "Mensaje": "CURP ¡formato incorrecto! (formato ejemplo: XEXX010101HNEXXXA4)"};
				break;
			case "Telefono":
				return {"Estatus": EvaluarExpresion(RexpTelefono, ThisValor), "Mensaje": "Telefono ¡formato incorrecto! (formato ejemplo: (XX) XXXX-XXXX)"};
				break;
			case "CodigoPostal":
				return {"Estatus": EvaluarExpresion(RexpCP, ThisValor), "Mensaje": "CodigoPostal ¡formato incorrecto! (formato ejemplo: 55555)"};
				break;
			case "ClaveEstado":
				return {"Estatus": EvaluarExpresion(RexpClaveEstado, ThisValor), "Mensaje": "ClaveEstado ¡formato incorrecto! (formato ejemplo: MEX)"};
				break;
			case "Fecha":
				return {"Estatus": EvaluarExpresion(RexpFecha, ThisValor), "Mensaje": "Fecha ¡formato incorrecto! (formato ejemplo: aaaa-MM-dd)"};
				break;
			default:
				return {"Estatus": false, "Mensaje": "Sin parámetro"};
			break;
		}
	}
}
