window.onload = function() {
	document.getElementById("tirar").onclick=tiraDados;
	document.getElementById("btnTotal").onclick= calculadora;
}

function tiraDados() {
	var dados= document.getElementById("dados");

	for(i=0 ; i < 5; i++){
		var aleatorio = Math.floor(Math.random()*6+1);
		dados.getElementsByTagName("input")[i].value = aleatorio;
		

		//Transforma el valor aleatorio en dados.
		switch(dados.getElementsByTagName("input")[i].value){
			case '1':
				dados.getElementsByTagName("input")[i].value = "K";
				dados.getElementsByTagName("input")[i].style.color= "red";
				break;
			case '2':
				dados.getElementsByTagName("input")[i].value = "Q";
				dados.getElementsByTagName("input")[i].style.color= "black";
				break;
			case '3':
				dados.getElementsByTagName("input")[i].value = "J";
				dados.getElementsByTagName("input")[i].style.color= "black";
				break;
			case '4':
				dados.getElementsByTagName("input")[i].value = "R";
				dados.getElementsByTagName("input")[i].style.color= "red";
				break;
			case '5':
				dados.getElementsByTagName("input")[i].value = "N";
				dados.getElementsByTagName("input")[i].style.color= "black";
				break;
			case '6':
				dados.getElementsByTagName("input")[i].value = "★";
				dados.getElementsByTagName("input")[i].style.color= "red";
				break;
		}
	}
}

function calculadora(){
	var valor1 = document.getElementById("valor1").value;
	var valor2 = document.getElementById("valor2").value;
	
	document.getElementById("total").value = valor1 * valor2;
}
