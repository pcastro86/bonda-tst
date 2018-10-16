angular.module('app')
    .component('availabilityComponent', {
        bindings: {},
        templateUrl: 'app/availability-date/availability.html',
        controller: function () {
            this.date = 'Ayer'
            this.expiration = 'Próximo a vencer'
        }
    })
