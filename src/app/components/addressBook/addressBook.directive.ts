/** @ngInject */
export function addressBook(): angular.IDirective {

  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'app/components/addressBook/addressBook.html',
    controller: 'AddressBookController',
    controllerAs: 'vm',
    bindToController: {
      contacts: '=',
      filter: '='
    }
  };

}
