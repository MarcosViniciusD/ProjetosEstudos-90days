const x = parseInt(19);
const b = 'Salve pra galera de osasco, eu ';
const array = [1,2,10,5]

if (x<=18){
    console.log(`${b} tenho ${x} anos e não posso dirigir`)
}else{
    console.log(`${b} tenho ${x} anos e posso dirigir`)
}


console.log(array[2])
if (array[2] < 9){
    console.log('array possui o valor menor que 9')
}else{
    console.log('array possui o valor maior que 9')
}

//Podemos fazer a impressao de mais de um valor. --run node index.js no terminal;
console.log(x,b,array)
//Podemos tambem, ter uma contagem de impressoes. Tem a mesma funcao do log, porem passa a contagem de quantas vezes foi executado o console.count. --run node index.js no terminal;
console.count(`Valor de x é: ${x}, ,Contagem:`)
console.count(`Valor de x é: ${x}, ,Contagem:`)
console.count(`Valor de x é: ${x}, ,Contagem:`)
console.count(`Valor de x é: ${x}, ,Contagem:`)
console.count(`Valor de x é: ${x}, ,Contagem:`)
console.count(`Valor de x é: ${x}, ,Contagem:`)

//Como limpar o console? criamos uma funcao para definir o tempo que ela vai ficar executando. 
setTimeout(()=>{
    //Limpa o console a cada 2000, ou seja, 2 segundos
  console.clear();
},2000)