angular.module('app')
    .component('requestComponent', {
        bindings: {},
        templateUrl: 'app/request-date/request.html',
        controller: function ($scope) {
            this.date = 'Fecha de solicitud'
        }
    })
