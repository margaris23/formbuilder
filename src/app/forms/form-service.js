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

        var FORM_ELEMENT_TYPE = {
            TEXT: 'text',
            BUTTON: 'button',
            SUBMIT: 'submit'
        };

        var dummy = {
            id: '1',
            name: 'template1',
            items: [
                { element: 'input', value: 'click', type: 'text' }
            ]
        };

        function validate(form) {
            return false;
        }

        return {
            list: function (cb) {
                cb = cb || Function.prototype;
                cb(null, [dummy]);
            },
            save: function (form, cb) {
                cb = cb || Function.prototype;
                if (!validate(form)) {
                  return cb('Invalid or empty object');
                }

                // send request to server
                cb(null);
            },
            remove: function (/* form, cb */) {

            },
            edit: function (/*id*/) {
                var deferred = $q.defer();

                // tmp
                deferred.resolve(dummy);

                return deferred.promise;
            },
            getFormElements: function () {
                var keys = Object.keys(FORM_ELEMENT);
                return keys.map(function (k) {
                    return { name: FORM_ELEMENT[k], value: k };
                });
            },
            getFormElementTypes: function () {
                var keys = Object.keys(FORM_ELEMENT_TYPE);
                return keys.map(function (k) {
                    return { name: FORM_ELEMENT_TYPE[k], value: k};
                });
            }
        };
    });