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
    
    let resultLogin = { message:"", logged:false};

    if (isLogged()){
        resultLogin.logged = true;
        return resultLogin;
    }

    firebase.auth().signInWithEmailAndPassword(user, password).catch(function(error) {
        resultLogin.logged  = false;
        resultLogin.message = error.message;
        return resultLogin; 
    });

    if (isLogged()){
        resultLogin.logged = true;
        return resultLogin;
    } else {
        resultLogin.logged = false;
        resultLogin.message = "Usuário ou senha incorretos.";
        return resultLogin;
    }

    
}

function logoff (e){

    e.preventDefault();

    firebase.auth().signOut().then(function() {
       alert("logoff feito com sucesso");
      }).catch(function(error) {
        alert("logoff não efetuado." + error.message);
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