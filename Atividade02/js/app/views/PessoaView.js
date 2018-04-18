class PessoasView {
    
    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    _template(model) {
        
        return `

        <div id="page-wrapper">
            <div class="container-fluid">
                <div class="row bg-title">
                    <div class="col-lg-9 col-md-8 col-sm-8 col-xs-12">
                        <h4 class="page-title" id="TITLE-PAGE">Cadastro de pessoa</h4> 
                        <h5 id="DESCRIPTION-PAGE">Criação de cadastro de pessoas com JS MVC e banco noSQL (Firebase).</h5>
                    </div>
                    <div class="col-lg-3 col-sm-4 col-md-4 col-xs-12">
                        <a href="https://github.com/MichelManarin/michelmanarin.github.io/blob/master/Atividade01/js/CalculoIMC.js" target="_blank" class="btn btn-danger pull-right m-l-20 hidden-xs hidden-sm waves-effect waves-light">Acessar GIT

                        </a>
                        <ol class="breadcrumb">
                            <li><a href="../portfolio.html">Ínicio</a></li>
                            <li class="active">Cadastro de pessoa</li>
                        </ol>
                    </div>
                    <!-- /.col-lg-12 -->
                </div>
                <!-- /row -->

                <div class="row">
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Novas pessoas</h3>
                            <ul class="list-inline two-part">
                                <li><i class=" icon-user-follow text-info"></i></li>
                                <li class="text-right"><span class="counter">0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Total de pessoas</h3>
                            <ul class="list-inline two-part">
                                <li><i class="icon-people text-purple"></i></li>
                                <li class="text-right"><span class="counter">0</span></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-6 col-xs-12">
                        <div class="white-box">
                            <h3 class="box-title">Média de idade</h3>
                            <ul class="list-inline two-part">
                                <li><i class="icon-calculator text-danger"></i></li>
                                <li class="text-right"><span class="counter">0</span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="row">

                        
                    <div class="col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Pessoas</h3>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Nome</th>
                                            <th>E-mail</th>
                                            <th>Data nascimento</th>
                                            <th>Telefone</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody id="table-data">
                                        ${model.negociacoes.map(n => `
                                            <tr>
                                                <td>${DateHelper.dataParaTexto(n.nome)}</td>
                                                <td>${DateHelper.dataParaTexto(n.datanasc)}</td>
                                                <td>${n.email}</td>
                                                <td>${n.telefone}</td>
                                            </tr>`).join('')}          
                                        <!--<tr>
                                             <td>1</td>
                                            <td>Deshmukh</td>
                                            <td>Prohaska</td>
                                            <td>@Genelia</td>
                                            <td>admin</td>
                                            <td>
                                                <i class="fa fa-trash-o iconremove"></i>
                                            </td>
                                        </tr>
                                        -->
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-lg-12 col-md-12 col-xs-12">
                            <div class="white-box">
                                <form id="formulario" class="form-horizontal form-material">
                                    <div class="form-group">
                                        <label class="col-md-12">Nome</label>
                                        <div class="col-md-12">
                                            <input  name="nome" required id="camponome" type="text" placeholder="Nome da pessoa" class="form-control form-control-line"> </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">E-mail</label>
                                        <div class="col-md-12">
                                            <input  name="email" required id="campoemail" type="text" placeholder="E-mail da pessoa" class="form-control form-control-line" name="example-email" id="example-email"> </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Data de nascimento</label>
                                        <div class="col-md-12">
                                            <input  name="altura" required id="campodata" type="date" step="0.01" placeholder="Data de nascimento da pessoa" class="form-control form-control-line" name="campodata" id="campodata"> </div>
                                    </div>          
                                    <div class="form-group">
                                        <label for="example-email" class="col-md-12">Telefone</label>
                                        <div class="col-md-12">
                                            <input  name="campotelefone" required id="campotelefone" type="tel" placeholder="Telefone da pessoa" class="form-control form-control-line" name="campotelefone" id="campotelefone"> </div>
                                    </div>        
                                    <div class="form-group">
                                        <div class="col-sm-12">
                                            <button type="button" onclick="adiciona(event)" class="btn btn-success">Inserir pessoa</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                                     
                </div>

                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
            <footer class="footer text-center">FrameWork Ample Admin disponibilizado pela Wrappixel.com - Portfólio Michel Manarin</footer>
        </div>
        <!-- /#page-wrapper -->
        `;





        /*<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
        
            <tbody>
                ${model.negociacoes.map(n => `
                    
                    <tr>
                        <td>${DateHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.volume}</td>
                    </tr>
                    
                `).join('')}                
            </tbody>
                  
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce((total, n) => total + n.volume, 0.0)}
                </td>
            </tfoot>
            
        </table>
        `;*/
    }
    
    update(model) {
        
        this._elemento.innerHTML = this._template(model);
    }
}
