// snake client.js

const net = require('net');
const { IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Sucessfully connected to game server')
  });

  conn.on('connect', () => {
    conn.write('Name: TNT');
  })
  
  return conn;
};

module.exports = { connect };