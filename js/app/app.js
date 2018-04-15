initialization();

function initialization(){

    var config = {
        apiKey: "AIzaSyAmehj9iT3_km2s7mYClNtkxN1PMAPEA14",
        authDomain: "portfolio-599af.firebaseapp.com",
        databaseURL: "https://portfolio-599af.firebaseio.com",
        projectId: "portfolio-599af",
        storageBucket: "portfolio-599af.appspot.com",
        messagingSenderId: "876379510056"
    };
    
    firebase.initializeApp(config);
}

function callLogin(user,password){
    
    var modelReturn = '{ "connection" : [' +
                          '{ "result":"<result>" , "errMessage":"<message>" } ]}';

    if (isLogged()){
        return JSON.parse(modelReturn.replace("<result>","sucess").replace("<message>",""));
    }

    firebase.auth().signInWithEmailAndPassword(user, password).catch(function(error) {
        return JSON.parse(modelReturn.replace("<result>","failure").replace("<message>",error.message));
    });

    if (isLogged()){
        return JSON.parse(modelReturn.replace("<result>","sucess").replace("<message>",""));
    } else {
        return JSON.parse(modelReturn.replace("<result>","failtura").replace("<message>","Usuário ou senha incorretos."));
    }

    
}

function logoff (e){

    e.preventDefault();
    
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }).catch(function(error) {
        // An error happened.
      });

}

function isLogged(){
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
                return true;
            }else{
                return false;
            }
        });
}

function createUser(e){

    e.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("senha");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        swal("Não foi possível criar um novo usuário. " + errorMessage);
        return false;
    });

    swal("Excelente!", "Usuário criado com sucesso!", "success");
    
}