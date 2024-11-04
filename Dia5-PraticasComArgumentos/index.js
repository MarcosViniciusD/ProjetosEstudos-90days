const minimist = require('minimist');


//Modulo interno;
const soma = require('./soma').soma;
soma(2,2)

//Modulo externo
const argumentos = minimist(process.argv.slice(2))

const a = parseInt(argumentos['a']);
const b = parseInt(argumentos['b']);

soma(a,b)

