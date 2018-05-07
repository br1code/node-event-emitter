const Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("someoneSaidHello", function() {
    console.log("Somewhere, someone said hello.");
});

emtr.on("someoneSaidHello", function() {
    console.log("Hey, hello!");
});

console.log("Hello");
emtr.emit("someoneSaidHello");