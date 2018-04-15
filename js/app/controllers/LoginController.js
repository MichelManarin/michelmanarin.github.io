class LoginController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);


        this._loginView = new LoginView($('#conteudo'));

        this._form = $("#loginForm");
        
    }
    
    login(event) {

        event.preventDefault();

        var objResponse = setLogin(this._form.email.value,this._form.senha.value);
        
        if (objResponse.logged){
            this._loginView.redirect();
        } else {
            this._loginView.showAlert(objResponse.message);
        }
    }

    register(event){
        event.preventDefault();
        this._loginView.update(false);
    }
        
    
    _limpaFormulario() {
        this._email.value = '';
        this._senha.value = '';
        this._email.focus();   
    }
}