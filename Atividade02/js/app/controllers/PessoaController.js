class PessoaController {
    
    constructor() {
        
        // Transforma document.getElemetByID em $
        let $ = document.querySelector.bind(document);

        // Criação dos campos da classe que fazem ligação com os inputs
        this._inputNome     = $('#camponome');
        this._inputDataNasc = $('#campodata');
        this._inputEmail    = $('#campoemail');
        this._inputTelefone = $('#campotelefone');

        this._cardContadorPessoas = $('#cardcontadorpessoas');
        this._cardNovasPessoas    = $('#cardnovaspessoas');
        this._cardMediaIdade      = $('#cardmediaidade');

        this._loading = $('#loading');
        

        // Instancia collection de pessoas
        this._listaPessoas = new ListaPessoas();

        // Atualizar view
        this._pessoasView  = new PessoasView($('#pessoasView'));

        this._pessoasView.update(this._listaPessoas);
        
        ConexaoBanco.lerPessoas();

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