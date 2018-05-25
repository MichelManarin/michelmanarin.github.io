app.controller("LoginController", function($scope, $firebaseAuth) {
	
	var auth = $firebaseAuth();
	
	$scope.user = "";
	$scope.pass = "";

	$scope.successTextAlert = "Logado com sucesso";
	$scope.showSuccessAlert = false;

	
	
	$scope.submit = function() {
		
		this.logar(this.user,this.pass);
	};

	$scope.logar = function(email, senha) {

		auth.$signInWithEmailAndPassword(email, senha)
			.then(function(authData) {
				this.showSuccessAlert = true;	
				console.log(this.showSuccessAlert);
					alert("Logged in as:" + authData.uid)
				}).catch(function(error) {
					console.error("Authentication failed:", error);
					alert("não logou");
			});
	}
	
});