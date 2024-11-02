//Vamos criar uma especie de modulo e vamos exporta-los;

module.exports = {
  //Funcao de somar, quando estamos exportando uma funcao, nao precisamos colocar o nome "function", funciona como se fosse um Me=étodo
  soma(a, b) {
    console.log(a + b);
  },
};

/**
 * Então aqui entendemos o conceito de bloco de codigo reaproveitado, e onde vamos utilizar esse bloco de codigo?
 * Isso mesmo, No nosso index.js(dia2 - fundamentos > index.js);
 *
 */
