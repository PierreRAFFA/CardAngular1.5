import { AddressBookService, IContact } from '../../services/addressBook.service';

/** @ngInject */
export class ContactController {

    public contact: IContact;

    constructor(
        private addressBookService: AddressBookService
    ) {

        this.activate();
    }

    activate() {

    }

    public remove($event: MouseEvent)
    {
        $event.stopPropagation();
        this.addressBookService.removeContact(this.contact.id);
    }

}
