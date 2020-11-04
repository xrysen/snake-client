const net = require('net');
const { IP, PORT } = require("./constants");

/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  // Recieve data from server
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log("Connected");
    conn.write("Name: SMO");
  });
  return conn;
}



module.exports = { connect };