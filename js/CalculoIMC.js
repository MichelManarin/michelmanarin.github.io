const DESCRIPTION_PAGE = "Criação de grid de cálculo IMC, permitindo inserção de pacientes e visualização do índice de massa corporal";
const DOCUMENT_PAGE = "JS - CálculoIMC";
const TITLE_PAGE = "CÁLCULO DE IMC";

var count = 0;

initializationPage();

function initializationPage(){

	document.title = DOCUMENT_PAGE;
	document.getElementById("TITLE-PAGE").innerText = TITLE_PAGE;
	document.getElementById("DESCRIPTION-PAGE").innerText = DESCRIPTION_PAGE;
}

function deleteRow(row) {

  var i = row.parentNode.parentNode.rowIndex;
  var table = document.getElementById("table-data");
  table.deleteRow(i-1);
}


function adicionarPaciente() {

	count = count + 1;

	var avisoTop = document.getElementById("avisoTop");
	var campoNome = document.getElementById("camponome");
	var campoPeso = document.getElementById("campopeso");
	var campoAltura = document.getElementById("campoaltura");
	var table = document.getElementById("table-data");
	var rowgrid = document.createElement("tr");

	var nome   = campoNome.value;
	var peso   = campoPeso.value;
	var altura = campoAltura.value;

	// Validações
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
		// Lançamento de aviso visual na tela
		avisoTop.style.cssText = "text-align: left; ";
		document.getElementById("tituloaviso").textContent = "Aviso";
		document.getElementById("corpoaviso").innerText  = "Não foi possível incluir o paciente. " + err;
		return;
	}

	// Criando novos elementos da grid
	var columnID = document.createElement("td");
	columnID.innerText = count;

	var columnNome = document.createElement("td");
	columnNome.innerText = nome;

	var columnPeso = document.createElement("td");
	columnPeso.innerText = peso;

	var columnAltura = document.createElement("td");
	columnAltura.innerText = altura;

	var columnDelete = document.createElement("td");
	var iElement = document.createElement("i");

	iElement.className += 'fa fa-trash-o iconremove';	
	columnDelete.appendChild(iElement);

	iElement.addEventListener("click",
  										function() {
    										deleteRow(this);
  											}
										);

	var alturaElevada = (parseFloat(campoAltura.value) * parseFloat(campoAltura.value));
	var imc = parseFloat(campoPeso.value) / alturaElevada;

	var columnIMC = document.createElement("td");
	columnIMC.innerText = imc.toFixed(2);

	rowgrid.appendChild(columnID);
	rowgrid.appendChild(columnNome);
	rowgrid.appendChild(columnPeso);
	rowgrid.appendChild(columnAltura);
	rowgrid.appendChild(columnIMC);
	rowgrid.appendChild(columnDelete);

	table.appendChild(rowgrid);

	document.getElementById("formulario").reset();

	return; 
}

function removerAviso(){ 
	var avisoTop = document.getElementById("avisoTop");
	avisoTop.style.cssText = "text-align: left; display: none; ";
}