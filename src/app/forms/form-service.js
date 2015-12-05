angular
    .module('myapp.forms')
    .factory('FormSvc', function ($q) {
        'use strict';

        var FORM_ELEMENT = {
            SELECT: 'select',
            INPUT: 'input',
            BUTTON: 'button',
            TEXTAREA: 'textarea',
            DATALIST: 'datalist',
            KEYGEN: 'keygen',
            LABEL: 'label',

            /* Custom */
            ROW: 'row'
        };

        var dummy = {
            id: '1',
            name: 'template1',
            items: [
                { element: 'input', value: 'click', type: 'text' }
            ]
        };

        return {
            list: function (cb) {
                cb = cb || Function.prototype;
                cb(null, [dummy]);
            },
            save: function (/* form, cb */) {

            },
            remove: function (/* form, cb */) {

            },
            edit: function (id) {
                var deferred = $q.defer();

                // tmp
                deferred.resolve(dummy);

                return deferred.promise;
            }
        };
    });