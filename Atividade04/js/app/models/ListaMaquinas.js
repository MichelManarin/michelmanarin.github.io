class ListaMaquinas{
    
    constructor() {
        
        this._maquinas = [];
    }
    
    adiciona(maquina) {
        
        this._maquinas.push(maquina);
    }
    
    getCount(){
        return this._pessoas.length;
    }

    getAverage(){

        var i = null;
        var hoje = new Date();
        var somaIdade = 0.0;

        for (var pessoa in this._pessoas){
            var obj = this._pessoas[pessoa];
            somaIdade += hoje.getFullYear() - obj.datanasc.getFullYear();
        } ;

    
        if (this._pessoas.length > 0)
            return somaIdade / this._pessoas.length;
        else    
            return 0;
    }

   
}