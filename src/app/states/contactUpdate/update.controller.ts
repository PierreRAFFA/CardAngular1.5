import { AddressBookService, IContact } from '../../services/addressBook.service';

export class UpdateController {

  public contact: IContact;

  /* @ngInject */
  constructor (
      public addressBookService: AddressBookService,
      private $stateParams: angular.ui.IStateParamsService)
  {
    this.activate();
  }

  /** @ngInject */
  activate() {
    this.contact = this.addressBookService.getContact(this.$stateParams['id']);
  }

}
