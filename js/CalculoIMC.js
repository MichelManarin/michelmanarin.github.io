const DOCUMENT_PAGE    = "JS - CálculoIMC";
const TITLE_PAGE       = "CÁLCULO DE IMC";
const DESCRIPTION_PAGE = "Criação de grid de cálculo IMC, permitindo inserção de pacientes e visualização do índice de massa corporal";
const LINKGIT = "";

var count = 0;

initializationPage();

function initializationPage(){

	/*firebase.auth().onAuthStateChanged(function (user) {
        loggedUser = user;
        console.log('firebase.auth.onAuthStateChanged > user', user);
        if (user == null) {
            $('#div-must-auth').show(400);
        } else {
            $('#div-must-auth').hide(200);
            loggedIn(user);
        }
    });


	 var provider = new firebase.auth.GithubAuthProvider();
        provider.addScope('user');
        firebase.auth().signInWithPopup(provider).then(function (result) {
            console.log('firebase.auth.signInWithPopup > user', result.user);
            loggedIn(result.user);
        }).catch(function (error) {
            console.log('error', error);
            alert(error.message);
        });*/

	

	document.title = DOCUMENT_PAGE;

	document.getElementById("TITLE-PAGE").innerText = TITLE_PAGE;
	document.getElementById("DESCRIPTION-PAGE").innerText = DESCRIPTION_PAGE;
	 
}

function clearGrid(){

	var table = document.getElementById("table-data");
	
	while (table.firstChild) {
    	table.removeChild(table.firstChild);
	}
} 

function adicionarPaciente() {

	count = count + 1;

	var avisoTop = document.getElementById("avisoTop");
	var campoNome = document.getElementById("camponome");
	var campoPeso = document.getElementById("campopeso");
	var campoAltura = document.getElementById("campoaltura");
	
	//Pessoa = new Pessoa(campoNome.value,campoPeso.value,campoAltura.value);

	var table = document.getElementById("table-data");

 	
	// Create row of grid
	var rowgrid  = document.createElement("tr");

	var nome   = campoNome.value;
	var peso   = campoPeso.value;
	var altura = campoAltura.value;


	try {
    	if (peso <= 0){
  			throw "Peso deve ser maior que zero.";
  		}

  		if (altura <= 0){
  			throw "Altura deve ser maior que zero.";
  		}

  		if (nome.length == 0){
  			throw "O nome deve ser informado.";
  		}
	}
	catch(err) {
		avisoTop.style.cssText = "text-align: left; ";
		var titulo = avisoTop.getElementsByTagName("h2");
		titulo.textContent  = "teste";

		return;
	}

	


	// Create columns of row
	var columnID = document.createElement("td");
	columnID.innerText = count;

	var columnNome = document.createElement("td");
	columnNome.innerText = nome;

	var columnPeso = document.createElement("td");
	columnPeso.innerText = peso;

	var columnAltura = document.createElement("td");
	columnAltura.innerText = altura;


	var alturaElevada = (parseFloat(campoaltura.value) * parseFloat(campoaltura.value));
	var imc = parseFloat(campoPeso.value) / alturaElevada;

	var columnIMC = document.createElement("td");
	columnIMC.innerText = imc.toFixed(2);

	rowgrid.appendChild(columnID);
	rowgrid.appendChild(columnNome);
	rowgrid.appendChild(columnPeso);
	rowgrid.appendChild(columnAltura);
	rowgrid.appendChild(columnIMC);

	table.appendChild(rowgrid);

	document.getElementById("formulario").reset();

	return; 

}

function removerAviso(){ 
	var avisoTop = document.getElementById("avisoTop");
	avisoTop.style.cssText = "text-align: left; display: none; ";

}

class Pessoa {
  
  constructor(nome, peso, altura) {

  	

    this.nome = nome;
    this.peso = peso;
    this.altura = altura;

   

	//alert(Math.round(this.peso/alturaElevada));

    //this.imc = 	Math.round(this.peso/alturaElevada);
  }

  calcIMC() {
    return this.nome * this.altura;
  }
  	

}