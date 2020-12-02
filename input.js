// snake-client input.js

// * Setup User Interface 
// * Specifically, so that we can handle user input via stdin
// */

// Stores the active TCP connection object.
let connection;

const handleUserInput = (key) => {
  switch (key) {
    case '\u0003':
      process.exit();
      break;
    case 'x':
      process.exit();
      break;
    case 'w':
      connection.write('Move: up');
      break;
    case 'a':
      connection.write('Move: left');
      break;
    case 's':
      connection.write('Move: down');
      break;
    case 'd':
      connection.write('Move: right');
  }
};

const setupInput = function(conn) {
  connection = conn;
 const stdin = process.stdin;
 
 stdin.setRawMode(true);
 stdin.setEncoding('utf8');

 stdin.on('data', handleUserInput);
 stdin.resume();
 return stdin;
};

module.exports = { setupInput };