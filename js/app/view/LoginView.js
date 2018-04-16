class LoginView {
    
    constructor(elemento) {
        
        this._elemento = elemento;
        this.update(true);
    }
    
    _templateLogin() {
        
        return `
            <section id="wrapper" class="new-login-register">
                <div class="lg-info-panel" style="background: url(plugins/images/login-register.jpg) center center/cover no-repeat!important;">
                        <div class="inner-panel">
                            <a href="javascript:void(0)" class="p-20 di"><img src="plugins/images/admin-logo-white.png"></a>
                            <div class="lg-content">
                                <h2>MICHEL<b>MANARIN</b></h2>
                                <p class="text-muted">Bem vindo ao meu portfolio e minha caixinha de testes. Qualquer projeto alocado aqui não é real. </p>
                                <a href="https://github.com/michelmanarin" class="btn btn-rounded btn-danger p-l-20 p-r-20"> Acesse meu GITHUB</a>
                            </div>
                        </div>
                </div>
                <div class="new-login-box">
                            <div class="white-box">
                                <h3 class="box-title m-b-0">Identificação</h3>
                                <small>Insera sua conta abaixo</small>
                            <form onsubmit="loginController.login(event)" class="form-horizontal new-lg-form" id="loginForm" action="index.html">
                                
                                <div class="form-group  m-t-20">
                                <div class="col-xs-12">
                                    <label>E-mail</label>
                                    <input id="email" name="email" class="form-control" type="text" required="" placeholder="E-mail">
                                </div>
                                </div>
                                <div class="form-group">
                                <div class="col-xs-12">
                                    <label>Senha</label>
                                    <input id="senha" name="senha" class="form-control" type="password" required="" placeholder="Senha">
                                </div>
                                </div>
                                <div class="form-group">
                                <div class="col-md-12">
                                    <div class="checkbox checkbox-info pull-left p-t-0">
                                    <input id="checkbox-signup" type="checkbox">
                                    <label for="checkbox-signup"> Lembre-me </label>
                                    </div>
                                    <a href="javascript:void(0)" id="to-recover" class="text-dark pull-right"><i class="fa fa-lock m-r-5"></i> Esqueceu a senha?</a> </div>
                                </div>
                                <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-info btn-lg btn-block btn-rounded text-uppercase waves-effect waves-light" type="submit">Entrar</button>
                                </div>
                                </div>
                                <div class="form-group m-b-0">
                                <div class="col-sm-12 text-center">
                                    <p>Você não tem uma conta? <a style="cursor:pointer;" onclick="loginController.changeRegister(event);" class="text-primary m-l-5"><b>Cadastra-se</b></a></p>
                                </div>
                                </div>
                            </form>
                            <form class="form-horizontal" id="recoverform" action="index.html">
                                <div class="form-group ">
                                <div class="col-xs-12">
                                    <h3>Recupere a senha</h3>
                                    <p class="text-muted">Entre com seu endereço de e-mail que lhe enviaremos um e-mail com sua nova senha! </p>
                                </div>
                                </div>
                                <div class="form-group ">
                                <div class="col-xs-12">
                                    <input class="form-control" type="text" required="" placeholder="Email">
                                </div>
                                </div>
                                <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-primary btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Reset</button>
                                </div>
                                </div>
                            </form>
                            </div>
                </div>        
            </section>
        `;
    }

    _templateRegister() {
        
        return `
            <section id="wrapper" class="new-login-register">
                <div class="lg-info-panel" style="background: url(plugins/images/login-register.jpg) center center/cover no-repeat!important;">
                        <div class="inner-panel">
                            <a href="javascript:void(0)" class="p-20 di"><img src="plugins/images/admin-logo-white.png"></a>
                            <div class="lg-content">
                                <h2>MICHEL<b>MANARIN</b></h2>
                                <p class="text-muted">Bem vindo ao meu portfolio e minha caixinha de testes. Qualquer projeto alocado aqui não é real. </p>
                                <a href="https://github.com/michelmanarin" class="btn btn-rounded btn-danger p-l-20 p-r-20"> Acesse meu GITHUB</a>
                            </div>
                        </div>
                </div>
                <div class="new-login-box">
                    <div class="white-box">
                        <h3 class="box-title m-b-0">Cadastra-se</h3> <small>Insira os detalhes abaixo</small>
                        <form onsubmit="loginController.newUser(event)" class="form-horizontal new-lg-form" id="loginForm" action="index.html">
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input id="email" name="email" class="form-control" type="text" required="" placeholder="E-mail"> </div>
                            </div>
                            <div class="form-group ">
                                <div class="col-xs-12">
                                    <input id="senha" type="password" name="senha" class="form-control" type="password" required="" placeholder="Senha"> </div>
                            </div>
                            <div class="form-group">
                                <div class="col-xs-12">
                                    <input class="form-control" type="password" required="" placeholder="Confirmar a senha"> </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-12">
                                    <div class="checkbox checkbox-primary p-t-0">
                                        <input id="checkbox-signup" type="checkbox">
                                        <label for="checkbox-signup"> Eu aceito os <a href="#">termos</a></label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group text-center m-t-20">
                                <div class="col-xs-12">
                                    <button class="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Cadastrar</button>
                                </div>
                            </div>
                            <div class="form-group m-b-0">
                                <div class="col-sm-12 text-center">
                                    <p>Você já tem uma conta? <a style="cursor:pointer;" onclick="loginController.changeLogin(event);" class="text-danger m-l-5"><b>Efetuar login</b></a></p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        `;
    }


    redirect(){
        window.location.href = "https://michelmanarin.github.io/portfolio.html";
    }

    showAlert(message){
        swal(message);
    }
    
    update(login) {
        if (login){
            this._elemento.innerHTML = this._templateLogin();
        } else {
            this._elemento.innerHTML = this._templateRegister();
        }

        
    }
}
