class TelaInicial {



  constructor() {
     var i  = document.getElementById("conteudo");
      i.innerHTML =`<div id="page-wrapper" style="padding-top:20px;">
            <div class="container-fluid">

                <section class="apresentacao">

                    <div class="row">
                        
                        <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">

                            <div id="filtros">
                                <div class="white-box box-filtro">
                                    <h3 class="box-title">Busque o veículo</h3>

                                    <form class="form-horizontal form-material">
                                            <div class="form-group">
                                                <label class="col-sm-12">Marca</label>
                                                <div class="col-sm-12">
                                                    <select class="form-control form-control-line">
                                                        <option>Fiat</option>
                                                        <option>Volkswagen</option>
                                                        <option>Audi</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="form-group">
                                                <label class="col-sm-12">Modelo</label>
                                                <div class="col-sm-12">
                                                    <select class="form-control form-control-line">
                                                    </select>
                                                </div>
                                            </div>
                                           

                                                                                     

                                        <div class="form-group">
                                            <label class="col-md-12">Descrição</label>
                                            <div class="col-md-12">
                                                <input  name="nome" required id="camponome" type="text" placeholder="Descrição do carro" class="form-control form-control-line"> </div>
                                        </div>

                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <button type="button" onclick="addPaciente()" class="btn btn-success">Buscar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-3">
                            <div class="promotionsection">

                                <h1>10% OFF</h1>
                                <button type="button" onclick="" class="btn btn-success">Confira agora</button>
                            </div>
                            
                        </div>
                    </div>
                    
                </section>

                <section style="margin-top: 20px; border-radius: 1px;">
                    <div class="row">
                        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <div class="white-box cadastre">
                                <h2>CADASTRE SUA VENDA</h2>
                                <h3>TOTALMENTE DE GRAÇA</h3>
                                <i class="fa fa-exchange fa-10x"></i>
                            </div>
                        </div>
                    </div>
                </section>`;      
  }




   

}





