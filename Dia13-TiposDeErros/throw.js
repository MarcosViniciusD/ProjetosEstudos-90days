const x = "900";

//Vamos checar se nossa variavel x é um numero;
if(!Number.isInteger(x)){
    throw new Error(`O valor de x "${x}" nao é um numero inteiro. Verifique se nao é uma string!`);
}else{
    console.log(`O numero digitado foi: ${x}`)
}

console.log('Código rodando;')