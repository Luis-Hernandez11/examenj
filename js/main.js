//Escriba el código de una función
//para que abra una pequeña ventana emergente en el lado inferior izquierdo.
if(window.location.href.indexOf('index') > -1){
window.onload = function Ventana(){
	var ventana = window.open("ven.html","Ventana emergente", "width=440, height=448, top=238, right=900");

	}
}

	//ventana emergente
	if(window.location.href.indexOf('ven') > -1){
	function cambio(url){


}
}

//estadistica
//capturando id por  medio de una funcion--------------------------------------------------
	function contenido(id){
		return document.getElementById(id);
	}

//sacando media---------------------------------------------------------------------------
	function calcular(){
		var n1=parseInt(contenido('num1').value);
		var n2=parseInt(contenido('num2').value);
		var n3=parseInt(contenido('num3').value);
		var n4=parseInt(contenido('num4').value);
		var n5=parseInt(contenido('num5').value);
		var n6=parseInt(contenido('num6').value);
		var n7=parseInt(contenido('num7').value);
		var n8=parseInt(contenido('num8').value);
		var n9=parseInt(contenido('num9').value);
		var n10=parseInt(contenido('num10').value);
		var total=(n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + n10 )/10;
		contenido("prom").value=total;
	}

//sacando mediana----------------------------------------------------------------------------
	function mediana(){
		var n1=parseInt(contenido('num1').value);
		var n2=parseInt(contenido('num2').value);
		var n3=parseInt(contenido('num3').value);
		var n4=parseInt(contenido('num4').value);
		var n5=parseInt(contenido('num5').value);
		var n6=parseInt(contenido('num6').value);
		var n7=parseInt(contenido('num7').value);
		var n8=parseInt(contenido('num8').value);
		var n9=parseInt(contenido('num9').value);
		var n10=parseInt(contenido('num10').value);
		var arrayNumbers =[n1, n2, n3, n4, n5, n6, n7, n8, n9, n10 ]
		arrayNumbers.sort(function (a, b){
    	return a - b;
		});
		var suma = (arrayNumbers[4] + arrayNumbers[5])/2;



		contenido("prom2").value=suma;

	}

//sacando moda---------------------------------------------------------------------------------------
	function moda(){
		var n1=parseInt(contenido('num1').value);
		var n2=parseInt(contenido('num2').value);
		var n3=parseInt(contenido('num3').value);
		var n4=parseInt(contenido('num4').value);
		var n5=parseInt(contenido('num5').value);
		var n6=parseInt(contenido('num6').value);
		var n7=parseInt(contenido('num7').value);
		var n8=parseInt(contenido('num8').value);
		var n9=parseInt(contenido('num9').value);
		var n10=parseInt(contenido('num10').value);

		var arrayNumbers =[n1, n2, n3, n4, n5, n6, n7, n8, n9, n10 ];

		arrayNumbers.sort(function (a, b){
    	return a - b;
		});

		var repetidos = [];

		arrayNumbers.forEach(function(numero){
		  repetidos[numero] = (repetidos[numero] || 0) + 1;


		});

		//ORDENAMIENTO DE NUMEROS REPETIDOS--------------------------------
		repetidos.sort(function (a, b){
			return a - b;
		});

		//var x2 = repetidos.length;
		var lista = repetidos;
		//var x3 = lista.length;

		//console.log(x2);
		console.log(lista);
		//console.log(x3);
		//console.log(x4);
		return contenido("prom3").innerHTML= lista;
			}

			//LECTURA DE CARACTERES

function cadenas(){
	var cadena = prompt("Digite su cadena");

var numeroVocales = cadena.match(/[aeiou]/gi).length;
var numeros = cadena.match(/[0-9]/gi).length;
var letras = cadena.match(/[a-zA-Z]/gi).length;

document.write("<h2>VOCALES: " + numeroVocales + "</h2>");
document.write("<br/><h2> NUMEROS: " + numeros + "</h2>");
document.write("<br/><h2> LETRAS: " +letras + "</h2>");
console.log(numeroVocales);
console.log(numeros);
console.log(letras);
}
