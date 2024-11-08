const path = require('path')

//Path Absoluto

console.log(path.resolve('testamdo.txt'));

//formar um Path
const midfolder = "relatorios";

const fileName = "MarcosVinicius.txt";

const finalPath = path.join("/",'arquivos', midfolder, fileName)

console.log(finalPath)