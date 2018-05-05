class MaquinasListaView extends View {
    
    constructor(elemento) {
        document.title = "Lista de máquinas";
        super(elemento);
    }


    _template(model) {
        
        return   `<div class="row">
                        <div class="col-lg-4 col-sm-6 col-xs-12">
                            <div class="white-box">
                                <h3 class="box-title">Total de máquinas</h3>
                                <ul class="list-inline two-part">
                                    <li><i class="icon-graph text-purple"></i></li>
                                    <li class="text-right"><span id="card01" class="counter">12</span></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-6 col-xs-12">
                            <div class="white-box">
                                <h3 class="box-title">Média de idade das máquinas</h3>
                                <ul class="list-inline two-part">
                                    <li><i class="icon-calculator text-danger"></i></li>
                                    <li class="text-right"><span id="card02" class="counter">29.00</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-12">
                            <div class="white-box">
                                <h3 class="box-title">Máquinas</h3>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Hash</th>
                                                <th>Nome</th>
                                                <th>Tipo</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody id="table-data">
                                        ${model._maquinas.map(m => `
                                            <tr>
                                                <td id="nomevalue">${m.nome}</td>
                                                <td>${m.tipo}</td>
                                                <td>${m.status}</td>
                                            </tr>`).join('')}  
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    }
        
        
}
