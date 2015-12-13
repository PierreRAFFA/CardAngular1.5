/** @ngInject */
export function contactForm(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/contactForm/contactForm.html',
    controller: 'ContactFormController',
    controllerAs: 'vm',
    bindToController: {
      contact: '='
    }
  };

}
