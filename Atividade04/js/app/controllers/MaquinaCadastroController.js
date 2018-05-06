class MaquinaController {
    
    constructor() {

        this._inputNome       = $('#camponome');
        this._inputStatus     = $('#campostatus');
        this._inputMarca      = $('#campomarca');
        this._inputTipo       = $('#campotipo');
        this._inputInclusao   = $('#campoinclusao');
        this._inputDescricao  = $('#campodescricao');
        this._inputFabricacao = $('#campofabricacao');
       
        $('#loading').css({'display':'none'});

        this._listaMaquinas = new ListaMaquinas();
        this._maquinasView  = new MaquinasCadastroView($('#maquinaView'));
        this._maquinasView.update(this._listaMaquinas);

    }

    afterRead(pessoas){
        $( this._showLoading ).css({ 'display' : 'none' });
    }
        
    adiciona(e) {
        
        e.preventDefault();

        alert(adicionou);
        this._listaMaquinas.adiciona(this._criaMaquina());
        this._maquinasView.update(this._listaMaquinas);
    }
    
    _criaMaquina() {
        
        return new Maquina(this._inputNome, this._inputDescricao, this._inputPessoa, 
                           this._inputTipo, DateHelper.textoParaData(this._inputFabricacao) , this._inputMarca,
                           null);
                           
    }
    
    limpaFormulario() {
     
        this._inputNome.value ="";
        this._inputDataNasc.value ="";
        this._inputEmail.value ="";
        this._inputTelefone.value ="";
    }
}