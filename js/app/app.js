var config = {
    apiKey: "AIzaSyAmehj9iT3_km2s7mYClNtkxN1PMAPEA14",
    authDomain: "portfolio-599af.firebaseapp.com",
    databaseURL: "https://portfolio-599af.firebaseio.com",
    projectId: "portfolio-599af",
    storageBucket: "portfolio-599af.appspot.com",
    messagingSenderId: "876379510056"
};

alert("oi");

firebase.initializeApp(config);

alert("oi");



alert("oi");

function callLogin(e){

    alert("oi");

    e.preventDefault();

    var email = document.getElementById("email");
    var password = document.getElementById("senha");


    firebase.auth().signInWithEmailAndPassword(email.value, password.value).catch(function(error) {

        var errorCode = error.code;
        var errorMessage = error.message;

        
        alert("erro ao logar");

    });

    
    alert("afterloggin");

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            alert("logadop");
            }else{
                alert("nao logadi");
            }
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