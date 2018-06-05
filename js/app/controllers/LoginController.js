class LoginController {
    
    constructor() {

        let $ = document.querySelector.bind(document);
        this._loginView = new LoginView($('#conteudo'));
        this._email = $("#email");
        this._senha = $("#senha");
        this._check = null;
        this._senhaconfirm = null;
    }
    
    login(event) {
        event.preventDefault();
        ConexaoBanco.setLogin(this._email.value,this._senha.value);
    }

    newUser(event) {
        event.preventDefault();

        if (this._check.checked == false){
            swal("É necessário aceitar os termos de cadastro.");
            return;
        }

        if (this._senha.value != this._senhaconfirm.value){
            swal("A confirmação da senha está incorreta.");
            return;
        }


        ConexaoBanco.createUser(this._email.value,this._senha.value);
    }

    changeRegister(event){
        event.preventDefault();
        
        this._loginView.update(false);

        let $ = document.querySelector.bind(document);
        this._email = $("#email");
        this._senha = $("#senha");
        this._check = $("#checkbox-signup");
        this._senhaconfirm = $("#senhaconfirm");
    }

    changeLogin(event){
        event.preventDefault();

        this._loginView.update(true);

        let $ = document.querySelector.bind(document);
        this._email = $("#email");
        this._senha = $("#senha");
    }
        
    
    _limpaFormulario() {
        this._email.value = '';
        this._senha.value = '';
        this._email.focus();   
    }
}