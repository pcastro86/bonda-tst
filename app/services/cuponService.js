angular.module('app')
.service('cuponService', function(){
    this.getDetailCoupon = function () {
        return [
            {percentage: '0%', title: 'Card Title | 2 lineas como máximo...', partner:'NOMBRE PARTNER'},
            {percentage: '2x1', title: 'Card Title | 2 lineas como máximo...', partner:'NOMBRE PARTNER'},
            {percentage: '15%', title: 'Card Title | 2 lineas como máximo...', partner:'NOMBRE PARTNER'},
            {percentage: '0%', title: 'Card Title | 2 lineas como máximo...', partner:'NOMBRE PARTNER'}
        ]

    }
/*     const info = {
        showBenefit: false
    }
    this.setBenefit= function(showBenefitDescription){
        info.showBenefit= false;
        console.log(showBenefitDescription)
       
    }
    this.getBenefit= function(showBenefitDescription){
        return info;
        console.log(showBenefitDescription)
       
    }  */
})

