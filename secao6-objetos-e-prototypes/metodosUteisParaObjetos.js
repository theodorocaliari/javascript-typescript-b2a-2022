/*
Object.values
Object.entries
Object.assign(destino, any)  //copia o objeto
Object.getOwnPropertyDescriptor(obj, 'chave') //retorna/exibe os valores privacidade da propriedade
...(spread) //copia/espalha os valores ou o objeto para outro objeto
Object.keys //mostra chaves do objeto
Object.freeze //congela/impede alteracao dos valores do objeto
Object.defineProperties //define niveis de edicao alteracao 
Object.defineProperty
*/

const produto = { nome: "Caneca", preco: 1.8 };
const outroObj = { ...produto, material: "porcelana" };

//console.log(produto);
console.log(Object.getOwnPropertyDescriptor(produto, "nome"));
//outroObj.preco = 10;
//console.log(outroObj);
