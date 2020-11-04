const { connect } = require("./client");

let connection;

// Setup user interface Specifically so that stdin can handle user input

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput(stdin);
  return stdin;
};

const handleUserInput = (stdin) => {
  stdin.on('data', (key) => {
    if(key === '\u0003') {
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "e") {
      connection.write("Say: tooo slooow");
    } else if (key === "q") {
      connection.write("Say: That one's mine!");
    }
  });
};

module.exports = { setupInput };