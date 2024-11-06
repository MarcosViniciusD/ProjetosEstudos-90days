const EventEmitter = require('events');
const eventEmitter = new EventEmitter()



//Funciona quase igual ao AddEventListner
eventEmitter.on('iniciar',()=>{
console.log("Durante a execuçaõ");
})
console.log("Antes da execução");

eventEmitter.emit('iniciar')
console.log("depois");