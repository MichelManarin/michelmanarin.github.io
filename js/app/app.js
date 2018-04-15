
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

function setLogoff(event){

    event.preventDefault();

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

    
function isLogged(){
    if (firebase.auth().currentUser) {
        swal("Informação", "Sessão encerrada com sucesso!", "success");
    } 
    return false;
}


function createUser(e){

    e.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("senha");

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(function(firebaseUser) {
        swal("Excelente!", "Usuário criado com sucesso!", "success");
    })
    .catch(function(error) {
        swal("Não foi possível criar um novo usuário. " + error.message);
    });
  
    
}