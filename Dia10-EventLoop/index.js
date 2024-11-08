/**
 * É um recurso da arquitetura do node.
 * Considerações: Tomar cuidado para nao criar loops infinitos e acabar derrubando nossa aplicação quando após o deploy;
 *
 *O codigo é lido de cima para baixo de forma sequencial.
 */

function primeiraFuncao(){
    console.log('executando a primeira função')
}
function segundaFuncao(){
    console.log('executando a segunda função')
}
function terceiraFuncao(){
    console.log('executando a terceira função')
    primeiraFuncao();
segundaFuncao();

}


terceiraFuncao();

//Com isso, sabemos que o event Loop garante que o codigo execute de forma SEQUENCIAL!!!
