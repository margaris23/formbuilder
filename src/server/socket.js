var socketio = require('socket.io');
var io = null;

function connHandler(socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
}

function config(http) {
    'use strict';

    io = socketio(http);
    io.on('connection', connHandler);
}

module.exports = {
    config: config
};
        