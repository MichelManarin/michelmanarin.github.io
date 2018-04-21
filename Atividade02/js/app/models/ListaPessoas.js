class ListaPessoas {
    
    constructor() {
        
        this._pessoas = [];
    }
    
    adiciona(pessoa) {
        
        this._pessoas.push(pessoa);
    }
    
    get negociacoes() {
        
        return [].concat(this._pessoas);
    }

    getCount(){
        return this._pessoas.length;
    }

    getAverage(){

        var i = null;
        var hoje = new Date();
        var somaIdade = 0.0;

        while (i < this._pessoas.length) {
            somaIdade += i.getFullYear() - hoje.getFullYear();
        }

        if (this._pessoas.length > 0)
            return somaIdade / this._pessoas.length;
        else    
            return 0;
    }

   
}