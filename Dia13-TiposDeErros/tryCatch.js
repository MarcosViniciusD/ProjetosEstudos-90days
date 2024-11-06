const x = 10

//try = tente fazer oque foi passado no bloco de execução. Se nao conseguir
try{
//sabemos que nao é permitido trocar o valor de uma constante
x = 2;


}
//Exiba a mensagem de erro, do porq não aconteceu o esperado no codigo acima.
catch(err){
console.log(`erro: ${err}`)
}