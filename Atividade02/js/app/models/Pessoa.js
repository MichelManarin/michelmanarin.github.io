class Pessoa {
    
    constructor(nome, nascimento, email, telefone) {
        
        if ((typeof(nascimento)) == 'string'){
             nascimento = DateHelper.textoParaData(nascimento);
        }

        this._nome     = nome;
        this._datanasc = new Date(nascimento.getTime());
        this._email    = email;
        this._telefone = telefone;
        this._ativo    =  true;

        ConexaoBanco.writeData(this._nome, this._datanasc, this._email, this._telefone);


        //impedir que os atributos do modelo sejam alterados 
        Object.freeze(this);
    }
    
    // metodos get
        get nome() {        
            return this._nome;
        }
        
        get datanasc() {
            // retornar um novo objeto de data para 
            // proteger as propriedades do objeto na camada de apresentação
            return new Date(this._datanasc.getTime());
        }
        
        get email() {
            return this._email;
        }
        
        get telefone() {
            
            return this._telefone;
        }

         get ativo() {
            
            return this._ativo;
        }
}