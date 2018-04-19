class PessoaController {
    
    constructor() {
        
        // Transforma document.getElemetByID em $
        let $ = document.querySelector.bind(document);

        // Instancia collection de pessoas
        this._listaPessoas = new ListaPessoas();

        // Atualizar view
        this._pessoasView  = new PessoasView($('#pessoasView'));
        this._pessoasView.update(this._listaPessoas);

        // Criação dos campos da classe que fazem ligação com os inputs
        this._inputNome     = $('#camponome');
        this._inputDataNasc = $('#campodata');
        this._inputEmail    = $('#campoemail');
        this._inputTelefone = $('#campotelefone');
    }
    
    adiciona(e) {
        
        e.preventDefault();

        this._listaPessoas.adiciona(this._criaPessoa());
        this._pessoasView.update(this._listaPessoas);
        this._limpaFormulario();   
    }
    
    _criaPessoa() {
        
        return new Pessoa(
            this._inputNome.value,
            DateHelper.textoParaData(this._inputDataNasc.value),
            this._inputEmail.value,
            this._inputTelefone.value);    
    }
    
    _limpaFormulario() {
     
        /*this._inputNome.value = '';
        this._inputEmail.value = '';
        this._inputCPF.value = '';
        this._inputNome.focus();   */
    }
}