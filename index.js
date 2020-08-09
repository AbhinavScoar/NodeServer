
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3001;

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
  socket.on('changePage', (data) => socket.broadcast.emit('changePage', data));
  socket.on('otherData', (data) => socket.broadcast.emit('otherData', data));
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));
app.get("/", (req,res)=>res.send("Running..."));
