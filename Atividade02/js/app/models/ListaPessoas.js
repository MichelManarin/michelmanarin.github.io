class ListaPessoas {
    
    constructor() {
        
        this._pessoas = [];

        // Busca banco 
        var pessoas = ler();

        pessoas.forEach(function(pessoa) {
            adiciona(pessoa);
        });
    }
    
    adiciona(pessoa) {
        
        this._pessoas.push(pessoa);
    }
    
    get negociacoes() {
        
        return [].concat(this._pessoas);
    }
}