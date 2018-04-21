class ConexaoBanco {

    constructor() {

        this._loggedUser = 0;
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

    static canActivate(){
        return new Promise(resolve => {
            if (firebase.auth().currentUser) {
                resolve(true);
            } else {
                const unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
                    unsubscribe();
                    if (user) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
            }
        });
    }

    static setLogoff(event){

        event.preventDefault();

        firebase.auth().signOut()
            .then(function(firebaseUser) {
                window.location.href = "https://michelmanarin.github.io/index.html";
            })
            .catch(function(error) {
                swal("Erro ao fazer logoff. " + error.message);
        });
    }


    static setLogin(username,password){

        let returnObj = { message:"", logged:false};

        if (firebase.auth().currentUser) {
            window.location.href = "https://michelmanarin.github.io/portfolio.html";
            //firebase.auth().signOut();
        } else {

            let firebaseUser = firebase.auth().signInWithEmailAndPassword(username, password)
                .then(function(firebaseUser) {
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

    static lerPessoas(){

        var userId = firebase.auth().currentUser.uid;
        var obj = firebase.database().ref(userId+'/pessoas');

        obj.once('value', function(snapshot) {
            
            var pessoas = snapshot.val();

            if (pessoas != null)
            {
                pessoaController.carregar(pessoas);
            }
        });
    }

    static writeData(nome, datanasc, email, telefone) {

        var postData = {
            nome: nome,
            datanasc: datanasc,
            email: email,
            telefone: telefone
        };

        var userId = firebase.auth().currentUser.uid;
    
        var newPostKey = firebase.database().ref().child('pessoas').push().key;

    
        var updates = {};
        updates[userId+'/pessoas/' + newPostKey] = postData;
    
        firebase.database().ref().update(updates)
        .then(function() {
            swal("Update com sucesso :");
        })
        .catch(function(error) {
            swal("Erro :" + error.message);
        });;
    }

    static insert(postData,node) {

        var userId = firebase.auth().currentUser.uid;
        var newHandle = firebase.database().ref().child(node).push().key;

    
        var updates = {};
        updates[userId+'/'+node+'/' + newHandle] = postData;
    
        firebase.database().ref().update(updates)
            .then(function() {
                swal("Update com sucesso :");
            })
            .catch(function(error) {
                swal("Erro :" + error.message);
            });;
    }

    static asasa(nome, datanasc, email, telefone) {

        if (isLogged) {

                var userId = firebase.auth().currentUser.uid;

                firebase.database().ref(userId + '/pessoas/').set({
                    nome: nome,
                    datanasc:  DateHelper.dataParaTexto(datanasc),
                    email: email,
                    telefone: telefone,
                    ativo: true
                });
        } else {
            swal('É necessário estar logado para realizar operação de gravação.');
        }    
    } 

    
    static isLogged(){
        if (firebase.auth().currentUser != null) {
            return true;
        } 
        return false;
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
}