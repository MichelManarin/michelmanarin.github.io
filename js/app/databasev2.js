class ConexaoBanco {

    constructor(controlMessage) {
         
        this._controlMessage = controlMessage;
        this._controller = null; 
        this._config     =  {
                                apiKey: "AIzaSyAmehj9iT3_km2s7mYClNtkxN1PMAPEA14",
                                authDomain: "portfolio-599af.firebaseapp.com",
                                databaseURL: "https://portfolio-599af.firebaseio.com",
                                projectId: "portfolio-599af",
                                storageBucket: "portfolio-599af.appspot.com",
                                messagingSenderId: "876379510056"
                            };

        firebase.initializeApp(this._config); 
    }

    associationController(controller){
        this._controller = controller;    
    };

      /////////////////////////////////////////
     /////* [AUTHENTIFICATION METHODS] *//////
    /////////////////////////////////////////

    static logout(){

        e.preventDefault();
        
        firebase.auth().signOut()
            .then(function(firebaseUser) {
                window.location.href = "https://michelmanarin.github.io/index.html";
            })
            .catch(function(error) {
                swal("Erro ao fazer logoff. " + error.message);
            });
    }


    static login(username,password){
        
        if (isLogged) {
            window.location.href = "https://michelmanarin.github.io/portfolio.html";
        } else {

            firebase.auth().signInWithEmailAndPassword(username, password)
                .then(function() {
                    window.location.href = "https://michelmanarin.github.io/portfolio.html";
                })
                .catch(function(error) {
                    
                    if (error.code === 'auth/wrong-password') {
                        swal('Senha incorreta');
                    } else if (error.code === 'auth/invalid-email') {
                        swal('E-mail inválido');
                    } else if (error.code === 'auth/user-disabled') {
                        swal('Usuário desabilitado');
                    } else if (error.code === 'auth/user-not-found') {
                        swal('Usuário incorreto');
                    } else {
                        swal(error.message);
                    }
                });   
        }
    }

    static isLogged(){
        if (firebase.auth().currentUser != null) {
            return true;
        } 
        return false;
    }

    static getUserLogged(){
        return firebase.auth().currentUser;
    }

    static createUser(email, password){

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function(firebaseUser) {
                swal("Excelente!", "Usuário criado com sucesso!", "success");
            })
            .catch(function(error) {

                if (error.code === 'auth/email-already-in-use') {
                    swal('E-mail já em uso.');
                } else if (error.code === 'auth/invalid-email') {
                    swal('E-mail inválido');
                } else if (error.code === 'auth/user-disabled') {
                    swal('Usuário desabilitado');
                } else if (error.code === 'auth/operation-not-allowed') {
                    swal('Operação não permitida');
                } else if (error.code === 'auth/weak-password') {
                    swal('Senha é muito fraca');
                } else {
                    swal(error.message);
                }
            });
    }

      /////////////////////////////////////////
     //////* [READ AND WRITE METHODS] *///////
    /////////////////////////////////////////

    static write(data,node) {

        if (this.isLogged == false)
            throw new error("Não está logado");

        if (typeof(node) == "string")
            throw new error("Esperado uma string");
        
        if (typeof(data) == "object")
        throw new error("Esperado um object");

        let updates = {};
        let user = getUserLogged();
        let key  = firebase.database().ref().child(node).push().key;
        
        updates[user + '/' + node + '/' + key] = data;
    
        firebase.database().ref().update(updates)
            
            .then(function() {

                this._controller.clean();
                this._controller.updateCard();

                if (this._controlMessage)
                    swal("Registro inserido com sucesso.")
                else
                    this._controller.showMessage("Registro inserido com sucesso.");
                
            })

            .catch(function(error) {
                if (this._controlMessage)
                    swal("Não foi possível realizar a inserção/update : \n" + error.message);
                else
                    this._controller.showMessage("Não foi possível realizar a inserção/update : \n" + error.message);
                
            });;

        return key;
    }


    static read(node){

        if (typeof(node) == "string")
            throw new error("Esperado string ");

        firebase.auth().onAuthStateChanged(function(user) {

            if (user) {

                var obj = firebase.database().ref(user + '/' + node);

                obj.once('value', function(snapshot) {
                    
                    var pessoas = snapshot.val();

                    if (pessoas != null)
                        this._controller.afterRead();
                });
          
            } else {
                swal('Usuário não está autentificado: \n\n Guardian Route ainda não foi implementado. Para uma melhor experiencia e acesso ao banco de dados realize o login.');
            }
        });

        
    }
    
    


    
}