var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var db = require('./db');

var RequestTypeMap = {
    GET_FORM: 'form/get',
    GET_FORMS: 'form/all',
    SAVE_FORM: 'form/save',
    DELETE_FORM: 'form/delete'
};

var dummy = {
    id: '1',
    name: 'template1',
    items: [
        { element: 'input', value: 'click', type: 'text' }
    ]
};

app.use(express.static('dist'));

app.get('/', function(req, res){
  res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    var keys = Object.keys(RequestTypeMap);
    keys.forEach(function (key) {
        socket.on(RequestTypeMap[key], function (msg, payload) {
            // echo for now with dummydata
            console.log('New event: ' + msg);
            payload.body = dummy;
            socket.emit('form/get', payload);
        });
    });
});

http.listen(9100, function(){
  console.log('listening on *:9100');
});