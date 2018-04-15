
var loggedUser;

var config = {
    apiKey: "AIzaSyAmehj9iT3_km2s7mYClNtkxN1PMAPEA14",
    authDomain: "portfolio-599af.firebaseapp.com",
    databaseURL: "https://portfolio-599af.firebaseio.com",
    projectId: "portfolio-599af",
    storageBucket: "portfolio-599af.appspot.com",
    messagingSenderId: "876379510056"
};

firebase.initializeApp(config);

initialization();

function initialization(){
    
    if (isLogged())
        redirect();
}

function setLogoff(e){

    e.preventDefault();

    firebase.auth().signOut().then(function() {
        return true;
    }).catch(function(error) {
        return false;
    });

}


function setLogin(username,password){

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

                
                if (error.errorCode === 'auth/wrong-password') {
                    swal('Senha incorreta');
                } else if (error.errorCode === 'auth/invalid-email') {
                    swal('E-mail inválido');
                } else if (error.errorCode === 'auth/user-disabled') {
                    swal('Usuário desabilitado');
                } else if (error.errorCode === 'auth/user-not-found') {
                    swal('Usuário incorreto');
                } else {
                    swal(error.message);
                }
            });
        
    }
}

    
function isLogged(){
    if (firebase.auth().currentUser) {
        return true;
    } 
    alert("Não está logado");
    return false;
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