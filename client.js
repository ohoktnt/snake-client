// snake client.js

const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
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
}

module.exports = connect;