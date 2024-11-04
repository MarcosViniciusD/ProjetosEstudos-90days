//Importando coreModule readLine (coreModule = ja vem no node)
const readLine = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout,
})

readLine.question("Quantos anos você tem?",(idade)=>{


    //verifica a idade do usuario
        if(idade > 100){
            console.log(`Você tem ${idade} anos  e nao morreu ainda? KKKKKK`)
        }else {
            console.log(`O usuario tem ${idade} anos de idade`)
        }
    readLine.close();
})