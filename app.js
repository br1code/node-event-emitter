const Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("someoneSayHello", function() {
    console.log("Somewhere, someone said hello.");
});

emtr.on("someoneSayHello", function() {
    console.log("Hello too!");
});

console.log("Hello");
emtr.emit("someoneSayHello");