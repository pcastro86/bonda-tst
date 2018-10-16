angular.module('app')
  .component('parenthoodBenefitComponent', {
    bindings: {},
    templateUrl: 'app/parenthood-benefit/parenthood.html',
    controller: function ($uibModal, $window) {
      this.title = 'Licencia extendida por paternidad'
      this.item = 'Gastronomía'
      this.mobile = 'Mi Bienestar'
      this.openModal = function(){
        var size = $window.innerWidth;
        size <= 800 ? $uibModal.open({
          templateUrl: 'app/modal-benefit/modal.html',
          size: 'lg',
          animation: true,
          controller: function ($scope, $uibModalInstance) {
            $scope.ok = function () {
              $uibModalInstance.close();
            };
          }
        }).result.then(function () { }, function () { })
          : 'false'
      }
    }
  })

