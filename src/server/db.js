var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/forms');
var _db = mongoose.connection;
var _isConnected = false;

_db.once('once', function (cb) {
    _isConnected = true;
});
_db.on('error', function (error) {
    console.error(error);
});

var Form = mongoose.model('Form', {
    id: String,
    name: String,
    items: [{ element: String, value: String, type: String }]
});

module.exports = {
    getForm: function (id, cb) {
        cb = cb || Function.prototype;
        !_isConnected && cb('error');
    },
    getAllForms: function (cb) {
    }
};