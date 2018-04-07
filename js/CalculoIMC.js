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

function getDataForm(form){

	var paciente = {
		nome:   form.nome.value,
		peso:   form.peso.value,
		altura: form.altura.value,
		imc:    calculateIMC(parseFloat(form.altura.value), parseFloat(form.peso.value))
	}

	return paciente;	
}

function calculateIMC(altura,peso){
	
    return peso / (altura * altura);
}

function pacienteRules(paciente){
	
	try {
    	if (paciente.peso <= 0){
  			throw "Peso deve ser maior que zero.";
  		}

  		if (paciente.altura <= 0){
  			throw "Altura deve ser maior que zero.";
  		}

  		if (paciente.nome.length == 0){
  			throw "O nome deve ser informado.";
  		}
	}
	catch(err) {
		avisoTop.style.cssText = "text-align: left;";
		document.getElementById("tituloaviso").textContent = "Aviso";
		document.getElementById("corpoaviso").innerText  = "Não foi possível incluir o paciente. " + err;
		return false;
	}
	return true;

}

function resetForm(form){
	document.getElementById("formulario").reset();
}

function buildRowTable(paciente,count){
	
	var rowgrid = document.createElement("tr");

	var columnID = document.createElement("td");
	var columnNome = document.createElement("td");
	var columnPeso = document.createElement("td");
	var columnAltura = document.createElement("td");
	var columnDelete = document.createElement("td");
	var columnIMC = document.createElement("td");

	columnID.innerText = count;
	columnNome.innerText = paciente.nome;
	columnPeso.innerText = paciente.peso;
	columnAltura.innerText = paciente.altura;
	columnIMC.innerText = paciente.imc.toFixed(2);

	var i = document.createElement("i");
	i.className += 'fa fa-trash-o iconremove';	
	i.addEventListener("click", function() {deleteRow(this);});
	
	columnDelete.appendChild(i);

	rowgrid.appendChild(columnID);
	rowgrid.appendChild(columnNome);
	rowgrid.appendChild(columnPeso);
	rowgrid.appendChild(columnAltura);
	rowgrid.appendChild(columnIMC);
	rowgrid.appendChild(columnDelete);
	
	return rowgrid;
}

function adicionarPaciente() {

	try {
		count = count + 1;
		
		var avisoTop = document.querySelector("#avisoTop");
		var form = document.querySelector("#formulario"); 
		var table = document.querySelector("#table-data");

		var paciente = getDataForm(form);

		if (!pacienteRules(paciente)){
			return;
		}

		table.appendChild(buildRowTable(paciente,count));
		resetForm();
	}
	catch(err) {
		avisoTop.style.cssText = "text-align: left;";
		document.getElementById("tituloaviso").textContent = "Erro ao adicionar o paciente";
		document.getElementById("corpoaviso").innerText  = "Mensagem do erro.: " + err;
	}
}

function removerAviso(){ 
	var avisoTop = document.getElementById("avisoTop");
	avisoTop.style.cssText = "text-align: left; display: none; ";
}