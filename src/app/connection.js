angular
.module('myapp.connections', [])
.factory('ConnSvc', function () {
    'use strict';

    var _socket = io('http://localhost:9100');
    var _requestMap = {};
    var _cnt = 0;

    var RequestTypeMap = {
        GET_FORM: 'form/get',
        GET_FORMS: 'form/all',
        SAVE_FORM: 'form/save',
        DELETE_FORM: 'form/delete'
    };

    function sendRequest(msg, body, cb) {
        var req = {
            id: _cnt,
            msg: msg,
            body: body
        };
        _socket.emit(msg, req);
        _requestMap[_cnt++] = cb;        
    }

    var api = {
        send: sendRequest
    };

    function replyHandler(error, reply) {
        var requestCb = _requestMap[reply.id];
        if (requestCb) {
            requestCb(error, reply.body);
            delete _requestMap[reply.id];
        }
    }

    // Initialization
    var keys = Object.keys(RequestTypeMap);
    keys.forEach(function (key) {
        api.key = key;
        _socket.on(RequestTypeMap[key], replyHandler);
    });

    return api;
});