// snake-client input.js

// * Setup User Interface 
// * Specifically, so that we can handle user input via stdin
// */

const handleUserInput = (key) => {
 if(key === '\u0003') {
   process.exit();
 }
};

const setupInput = function() {
 const stdin = process.stdin;
 
 stdin.setRawMode(true);
 stdin.setEncoding('utf8');

 stdin.on('data', handleUserInput)
 stdin.resume();
 return stdin;
};

module.exports = { setupInput };