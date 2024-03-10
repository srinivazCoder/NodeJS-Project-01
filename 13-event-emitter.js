const EventEmitter = require('events');
console.log(EventEmitter);

const customEmitter = new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`'data received' name ${name} with id ${id}`)
})

customEmitter.on("response",()=>{
    console.log("data for result")
})

customEmitter.on("showMsg",(msg)=>{
    console.log("You got message is :"+msg)
})

customEmitter.emit('response','JHONE',20);

customEmitter.emit("showMsg","Hey Srinivas How are you!")
