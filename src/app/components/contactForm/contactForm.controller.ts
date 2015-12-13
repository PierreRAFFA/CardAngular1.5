import { AddressBookService, IContact } from '../../services/addressBook.service';
////////////////////////////////////////////////////////


export interface IContactFormScope extends angular.IScope {
    contactForm: any;
}

export class ContactFormController {

    /**
     * Binded Contact in case of update
     */
    public contact: IContact;

    /**
     * Contact to modify
     * May be empty or alredy filled in case of update
     */
    public dirtyContact: IContact;

    ////////////////////////////////////////////////////////
    //////////////////////////////////////////// CONSTRUCTOR
    /** @ngInject */
    constructor(
        private $state: any,
        private $scope: IContactFormScope,
        private addressBookService: AddressBookService)
    {
        this.activate();
    }

    activate() {

        this.dirtyContact =
        {
            id: null,
            firstname: null,
            lastname: null,
            address: '',
            postalCode: '',
            town: '',
            county: '',
            country: '',
        };

        if ( this.contact) {
            angular.extend(this.dirtyContact, this.contact);
        }
    }

    ////////////////////////////////////////////////////////
    //////////////////////////////////////////// SAVE
    public save()
    {
        if (this.$scope.contactForm.$valid)
        {
            if ( this.dirtyContact.id)
            {
                this.addressBookService.updateContact(this.contact, this.dirtyContact);
            }else{
                this.addressBookService.addContact(this.dirtyContact);
            }

            this.$state.go('addressBook.list');
        }

    }

    public cancel()
    {
        this.$state.go('addressBook.list');
    }

}
