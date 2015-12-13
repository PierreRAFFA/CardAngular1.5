import { IContact } from '../../services/addressBook.service';

/** @ngInject */
export class AddressBookController {

    constructor(
        private $state: any
    ) {

        this.activate();
    }

    activate() {

    }

    public update(contact: IContact)
    {
        this.$state.go('addressBook.update' , {id:contact.id});
    }

}
