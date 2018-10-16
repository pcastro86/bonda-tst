angular.module('app')
    .component('benefitComponent', {
        bindings: {},
        templateUrl: 'app/benefit/benefit.html',
        controller: function (cuponService) {
            this.detailCoupons = cuponService.getDetailCoupon()


            /* this.setBenefit = cuponService.getBenefit() */
        }
    })




