/** @ngInject */
export function contact(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/contact/contact.html',
    controller: 'ContactController',
    controllerAs: 'vm',
    bindToController: {
      contact: '='
    }
  };

}
