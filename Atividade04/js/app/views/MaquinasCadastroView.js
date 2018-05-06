class MaquinasCadastroView extends View {
    
    constructor(elemento) {
        document.title = "Lista de máquinas";
        super(elemento);
    }


    _template(model) {
        
        return   `<div class="row">
        <div class="col-lg-12 col-sm-12 col-xs-12">
            <div class="white-box">
                <h3 class="box-title m-b-0">Cadastrar máquina</h3>
                <!-- Nav tabs -->
                <ul class="nav nav-tabs" style="padding-top:10px;" role="tablist">
                    <li role="presentation" class="active">
                        <a href="#home" aria-controls="home" role="tab" data-toggle="tab" aria-expanded="true">
                            <span class="visible-xs">
                                <i class="ti-home"></i>
                            </span>
                            <span class="hidden-xs">Geral</span>
                        </a>
                    </li>
                    <li role="presentation" class=""><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab" aria-expanded="false"><span class="visible-xs"><i class="ti-user"></i></span> <span class="hidden-xs">Manutenção preventiva</span></a></li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="home">
                        <form id="formulario" onsubmit="pessoaController.adiciona(event)" class="form-horizontal form-material">
                            <div class="form-group">
                                <div class="col-md-10">
                                    <label for="example-email" class="col-md-12 label-tabs">Nome</label>
                                    <input name="nome" required="" id="camponome" type="text" placeholder="Nome da máquina" class="form-control form-control-line"> 
                                </div>
                                <div class="col-md-2">
                                    <label for="example-email" class="col-md-12 label-tabs">Status</label>
                                    <select class="form-control form-group-tabs">
                                        <option>Ativo</option>
                                        <option>Inativo</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-4">
                                    <label for="example-email" class="col-md-12 label-tabs">Tipo de máquina</label>
                                    <select class="form-control form-group-tabs">
                                        <option>Corte</option>
                                        <option>Extrusora</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="example-email" class="col-md-12 label-tabs">Pessoa responsável</label>
                                    <select class="form-control form-group-tabs">
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="example-email" class="col-md-12 label-tabs">Marca</label>
                                    <select class="form-control form-group-tabs">
                                        <option>Azure</option>
                                        <option>3M</option>
                                    </select>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-4">
                                    <label for="example-email" class="col-md-12 label-tabs">Data inclusão</label>
                                    <input disabled="" name="altura" required="" id="campodata" type="date" placeholder="Data de nascimento da pessoa" class="form-control form-control-line">
                                </div>
                                <div class="col-md-4">
                                    <label for="example-email" class="col-md-12 label-tabs">Data fabricação</label>
                                    <input name="altura" required="" id="campodata" type="date" placeholder="Data de nascimento da pessoa" class="form-control form-control-line">

                                </div>
                            </div>

                            <div class="form-group">
                                    <div class="col-md-12">
                                        <label for="example-email" class="col-md-12 label-tabs">Descrição</label>
                                        <textarea class="form-control form-control-line" rows="5"></textarea>
                                    </div>
                            </div>

                            <div class="form-group">
                                <div class="col-lg-1 col-sm-2 col-xs-12">
                                    <button class="btn btn-block btn-info">Gravar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div role="tabpanel" class="tab-pane" id="profile">
                            <form id="formulario" onsubmit="pessoaController.adiciona(event)" class="form-horizontal form-material">
                                <div class="form-group">
                                    <div class="col-md-3">
                                        <label for="example-email" class="col-md-6 label-tabs">Periocidade em meses</label>
                                        <input name="nome" required="" id="camponome" type="number" placeholder="Periocidade em meses" class="form-control form-control-line"> 
                                    </div>
                                    <div class="col-md-9">
                                        <label for="example-email" class="col-md-12 label-tabs">Pessoa responsável</label>
                                        <select class="form-control form-group-tabs"></select>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
        
        
}
