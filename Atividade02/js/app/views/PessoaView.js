class PessoasView {
    
    constructor(elemento) {
        
        this._elemento = elemento;
    }
    
    _template(model) {
        
        return `
                <div class="row">
                    <div class="col-sm-12">
                        <div class="white-box">
                            <h3 class="box-title">Pessoas</h3>
                            <div class="table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Nome</th>
                                            <th>E-mail</th>
                                            <th>Data nascimento</th>
                                            <th>Telefone</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody id="table-data">
                                        ${model._pessoas.map(n => `
                                            <tr>
                                                <td>${n.nome}</td>
                                                <td>${n.email}</td>
                                                <td>${DateHelper.dataParaTexto(n.datanasc)}</td>
                                                <td>${n.telefone}</td>
                                                <td>
                                                    <i class="fa fa-trash-o iconremove"></i>
                                                </td>
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

                
        `;





    }
    
    update(model) {
        
        this._elemento.innerHTML = this._template(model);

    }

}
