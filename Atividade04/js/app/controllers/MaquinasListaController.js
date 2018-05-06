class MaquinasListaController {
    
    constructor() {
        this._listaMaquinas = new ListaMaquinas();
        this._maquinasView  = new MaquinasListaView($('#maquinaView'));
        this._maquinasView.update(this._listaMaquinas);
        ConexaoBanco.read('Maquinas');
    }


    afterRead(pessoas){
        
        this.updateCard();
        $('#loading').css({'display':'none'});
    }
    
    updateCard(){
        this._cardContadorPessoas.textContent = 0;
        this._cardMediaIdade.textContent = 0;
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