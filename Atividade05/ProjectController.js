class ProjectController{
    
    constructor() {

        this._inputName        = $('#name-project');
        this._inputDescription = $('#description-project');

    }
        
    add(e) {
        
        e.preventDefault();
        let postdata = { name: name, description: description };
        ConexaoBanco.write(postdata,"Projects" );
    }
    
    _create() {
        
        return new Maquina(this._inputNome, this._inputDescricao, this._inputPessoa, 
                           this._inputTipo, DateHelper.textoParaData(this._inputFabricacao) , this._inputMarca,
                           null);
                           
    }
}