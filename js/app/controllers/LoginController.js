class LoginController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);


        this._loginView = new LoginView($('#conteudo'));

        this._form = $("#loginForm");
        
    }
    
    login(event) {

        event.preventDefault();

        if (isLogged()){
            this._loginView.redirect();
        }

        var objectLogin = callLogin(this._form.email.value,this._form.senha.value);
        
        if (objectLogin.result = true){
            this._loginView.redirect();
        } else {
            this._loginView.showAlert(objectLogin.errMessage);
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