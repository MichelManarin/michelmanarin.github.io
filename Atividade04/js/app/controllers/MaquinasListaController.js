class MaquinasListaController {
    
    constructor() {
        this._listaMaquinas = new ListaMaquinas();
        this._maquinasView  = new MaquinasListaView($('#maquinaView'));
        this._maquinasView.update(this._listaMaquinas);
        ConexaoBanco.read('Maquinas');
    }


    afterRead(maquinas){

        for (var maquina in maquinas){
            var obj = maquinas[maquina];
            this._listaPessoas.adiciona(obj);
        } ;

        this.updateCard();
        this._pessoasView.update(this._listaPessoas);
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