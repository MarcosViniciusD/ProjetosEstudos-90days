const fs = require("fs");
//Ler aquivo de texto

fs.readFile("arquivo.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);

  if (data === "") {
    console.log(`O arquivo está vazio, por favor preencha-o: ${data}`);
  }
});

/**
 * Oque sao modulos? Escript reaproveitados;
 * Eles sao definidos em categorias
 * Internos: nos mesmos desenvolvemos
 * Core Modules: modulos que vem com o node.js
 * Externos: Modulos que instalamos via NPM
 */
