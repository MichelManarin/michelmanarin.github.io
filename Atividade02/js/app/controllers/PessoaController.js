class PessoaController {
    
    constructor() {
        
        // Transforma document.getElemetByID em $
        let $ = document.querySelector.bind(document);

        // Criação dos campos da classe que fazem ligação com os inputs
        this._inputNome = $('#nome');
        this._inputDataNascimento = $('#data');
        this._inputEmail = $('#quantidade');
        this._inputValor = $('#valor');
        this._inputCPF = $('#cpf');

        this._listaPessoas = new ListaPessoas();
        
        this._pessoasView = new PessoasView($('#pessoasView'));
        this._pessoasView.update(this._listaPessoas);
    }
    
    adiciona(e) {
        
        e.preventDefault();

        this._listaPessoas.adiciona(this._criaPessoa());
        this._pessoasView.update(this._listaPessoas);
        this._limpaFormulario();   
    }
    
    _criaPessoa() {
        
        return new Pessoa(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value);    
    }
    
    _limpaFormulario() {
     
        this._inputNome.value = '';
        this._inputEmail.value = '';
        this._inputCPF.value = '';
        this._inputNome.focus();   
    }
}