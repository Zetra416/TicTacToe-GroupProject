const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

const port = 3000
// const gameRooms = ['cs-go','rocket league','league of legend']

// const clients = {};
// var players ={};
// var unmatched;

//when client connect
io.of("/").on('connect'), (socket) => {
  //Welcome = function name in client
  let id = socket.id;
  clients[socket.id] = socket
  socket.emit("Welcome", "Hello and welcome to tic-tac-toe!");


  socket.on("disconnect", ()=> {
    console.log("Client discconected, ID: ", socket.id);
    delete clients[socket.id];
    socket.broadcast.emit("clientdisconnect", id);
  })
}

socket.on("joinRoom", (room)=> {
  //same like welcome but emit in client
  socket.join(room);
  io.of("/games", "New player has joined the room")
  return socket.emit("success", "You have successfuly joined the room")
});

if (opponentOf(socket)) {
  socket.emit("startGame", {symbol: players[socket.id].symbol});
  opponentOf(socket).emit("starGame", {symbol: players[opponentOf(socket).id].symbol});
}

//event if player make a moves
socket.on("move", data)=> {
  if (opponentOf(socket)) {
    socket.emit('moveMade', data);
    opponentOf(socket).emit("moveMad", data);
  }
});

//event to inform if opponent left
socket.on("disconnect", ()=> {

})





// io.on('connection', (socket)=> {
//   console.log('New player joined the lobby');
//   socket.on('create', (room)=> {
//     socket.join(room)
//   });
// });
//
// //create room
// socket.on('createGame', function(data)){
//   socket.join('room');
//   socket.emit('newGame', {name: })
// }
//
// //player2 join
// socket.on('joinGame', function(data)){
//   var room = io.nsps['/'].adapter.rooms[data.room]
// }
//
// //decide turn
// socket.on('playTurn', function(data){
//   socket.broadcast.to(data.room).emit('turnPlayed', {
//     tile: data.tile,
//     room: data.room
//   });
// });
//
// //end game
// socket.on('gameEnded', function(data){
//   socket.broadcast.to(data.room).emit('gameEnd', data);
// });

http.listen(port, () => {
  console.log("Server is listening on port" + port);
});
