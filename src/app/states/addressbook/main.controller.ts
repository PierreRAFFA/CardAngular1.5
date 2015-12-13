import { AddressBookService } from '../../services/addressBook.service';

export class MainController {

  public filterChoice: string;

  /* @ngInject */
  constructor (
      public addressBookService: AddressBookService)
  {
    this.activate();
  }

  /** @ngInject */
  activate() {
    this.filterChoice = '*';
  }

}
