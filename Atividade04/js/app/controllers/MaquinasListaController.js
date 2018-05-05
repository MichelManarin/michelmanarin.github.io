class MaquinasListaController {
    
    constructor() {

        this._inputNome   = $('#fieldnome');
        this._inputDesc   = $('#fieldtipo');
        this._inputAtivo  = $('#fieldativo');
        this._inputhash   = $('#fieldhash');
        this._showLoading = $('#loading');

        this._listaMaquinas = new ListaMaquinas();
        this._maquinasView  = new MaquinasListaView($('#maquinaView'));
        this._maquinasView.update(this._listaMaquinas);

        
        $( this._showLoading ).css({ 'display' : 'none' });

    }

    afterRead(){
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