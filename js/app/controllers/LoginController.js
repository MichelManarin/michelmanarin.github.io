class LoginController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);


        this._loginView = new LoginView($('#conteudo'));

        this._form = $("#loginForm");
        
    }
    
    login(event) {
        event.preventDefault();
        setLogin(this._form.email.value,this._form.senha.value);
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