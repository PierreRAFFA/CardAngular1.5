/** @ngInject */
export function letterChoice(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/letterChoice/letterChoice.html',
    controller: 'LetterChoiceController',
    controllerAs: 'vm',
    bindToController: {
      choice: '='
    }
  };

}
