class Maquina {
    
    constructor(nome, descricao, handlepessoa, tipo, datafabricacao , marca, hash) {
        
        if (ConexaoBanco.isLogged() == false) 
            throw new error("Não está logado");
        
        if ((typeof(datainclusao)) == 'string'){
            datainclusao = DateHelper.textoParaData(datainclusao);
        }

        if ((typeof(datafabricacao)) == 'string'){
            datafabricacao = DateHelper.textoParaData(datafabricacao);
        }

        this._nome = nome;
        this._tipo = tipo;
        this._descricao = descricao;
        this._pessoa = handlepessoa;
        this._datafabricacao = datafabricacao;
        this._datainclusao = new Date().getTime();
        this._marca = marca;
        this._ativo = true;

        if (hash == null){
            hash = ConexaoBanco.write({nome: nome, descricao: descricao, pessoa: pessoa,
                                       datafabricacao: datafabricacao, datainclusao: datainclusao,
                                       marca: marca, ativo: ativo}, node);    
        }

        this._hash = hash;

        Object.freeze(this);
    }
    
    get nome() {        
        return this._nome;
    }

    get tipo() {        
        return this._tipo;
    }

    get descricao() {        
        return this._descricao;
    }

    get pessoa(){
        return this._pessoa;
    }

    get pessoa(){
        return this._pessoa;
    }

    get datafabricacao(){
        return new Date(this._datafabricacao.getTime());
    }

    get datainclusao(){
        return new Date(this._datainclusao.getTime());
    }

    get marca(){
        return this._marca;
    }

    get ativo(){
        return this._ativo;
    }

}