class MaquinaController {
    
    constructor() {


        this._inputNome       = $('#camponome');
        this._inputStatus     = $('#campostatus');
        this._inputMarca      = $('#campomarca');
        this._inputInclusao   = $('#campoinclusao');
        this._inputDescricao  = $('#campodescricao');
        this._inputFabricacao = $('#campofabricacao');

        this._loading = $('#loading');

        
        
        $( this._loading ).css({ 'display' : 'none' });

        this._listaMaquinas = new ListaMaquinas();
        this._maquinasView  = new MaquinasCadastroView($('#maquinaView'));
        this._maquinasView.update(this._listaMaquinas);
        

    }

    afterRead(pessoas){
        $( this._showLoading ).css({ 'display' : 'none' });
    }
    
    setInfoCard(){
        this._cardContadorPessoas.textContent = this._listaPessoas.getCount();
        this._cardMediaIdade.textContent = (this._listaPessoas.getAverage()).toFixed(2);
    }
    

    buscarDadosBD(){
        this._loading.removeAttribute("style");
        ConexaoBanco.lerPessoas();
    }

    carregar(pessoas){

        for (var pessoa in pessoas){
            var obj = pessoas[pessoa];
            obj.datanasc = new Date(obj.datanasc);
            this._listaPessoas.adiciona(obj);
        } ;

        this._pessoasView.update(this._listaPessoas);
        this._loading.style.width='display:none';

    }


    adiciona(e) {
        
        e.preventDefault();

        this._listaPessoas.adiciona(this._criaPessoa());
        this._pessoasView.update(this._listaPessoas);
        this.setInfoCard(); 
    }
    
    _criaPessoa() {
        
        return new Pessoa(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputDataNasc.value),
            this._inputEmail.value,
            this._inputTelefone.value);    
    }
    
    limpaFormulario() {
     
        this._inputNome.value ="";
        this._inputDataNasc.value ="";
        this._inputEmail.value ="";
        this._inputTelefone.value ="";
    }
}