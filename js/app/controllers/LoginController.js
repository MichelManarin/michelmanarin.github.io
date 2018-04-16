class LoginController {
    
    constructor() {

        let $ = document.querySelector.bind(document);
        this._loginView = new LoginView($('#conteudo'));
        this._email = $("#email");
        this._senha = $("#senha");
    }
    
    login(event) {
        event.preventDefault();
        setLogin(this._email.value,this._senha.value);
    }

    newUser(event) {
        event.preventDefault();
        createUser(this._email.value,this._senha.value);
    }

    changeRegister(event){
        event.preventDefault();
        
        this._loginView.update(false);

        let $ = document.querySelector.bind(document);
        this._email = $("#email");
        this._senha = $("#senha");
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