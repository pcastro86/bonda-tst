angular.module('app')
    .component('accessDetailComponent', {
        bindings: {},
        templateUrl: 'app/access-detail/access.html',
        controller: function () {
            this.title = 'Como acceder'
            this.code = 'Fecha de Solicitud: [XX/XX/XXXX]'
            this.intructions = 'Description | Ingresá el código promocional que recibís por SMS al momento de realizar tu pago en el link exclusivo de Netshoes y obtené un 20% de descuento y tres cuotas sin interés en compras online, sin tope de reintegro. 20% de descuento y tres cuotas.'
            this.info = 'Información'
            this.web = 'Sitio Web'
            this.link = 'www.algo.com.ar'
        }
    })



