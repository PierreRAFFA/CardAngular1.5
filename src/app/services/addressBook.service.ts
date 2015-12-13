import { StorageService } from '../services/storage.service';
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////  INTERFACES
export interface IAddressBook
{
    contacts: IContact[];
}

/**
 * Contact Interface
 */
export interface IContact
{
    id: string;
    firstname: string;
    lastname: string;
    country: string;
    postalCode: string;
    address: string;
    town: string;
    county: string;
}

////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////
export class AddressBookService
{
    /**
     * Address book Object ( used to save in storage )
     */
    private _addressBook: IAddressBook;

    private _id: number = 0;

    ////////////////////////////////////////////////////////
    //////////////////////////////////////////// CONSTRUCTOR
    /** @ngInject */
    constructor (
        private $window: Window,
        private storageService: StorageService)
    {
        //At start, retrieve addressBook
        this._retrieveSavedAddressBook();
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// GET
    /**
     * Retrieve addressBook from localStorage
     * @param adressBookId
     */
    private _retrieveSavedAddressBook()
    {
        this._addressBook = this.storageService.get() || this._create();
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// ADD
    /**
     * Add a new contact and returns the new contact length in the address book
     * @param contact
     * @returns {number}
     */
    public addContact(contact: IContact): number
    {
        if (contact)
        {
            //assign id
            contact.id = this._guid();

            //add to addressbook
            this._addressBook.contacts.push(contact);

            //save
            this.storageService.save(this._addressBook);
        }
        return this._addressBook.contacts.length;
    }

    private _guid(): string
    {
        return 'c' + Date.now() + '-' + this._id++;
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// GET
    public getContact(contactId: string) : IContact
    {
        var result:IContact = null;
        angular.forEach(this._addressBook.contacts , function(contact:IContact, index: number)
        {
            if ( contactId === contact.id)
            {
                result = contact;
            }
        });

        return result;
    }

    public updateContact(contact: IContact, updatedContact: IContact)
    {
        angular.extend(contact , updatedContact);
        this.storageService.save(this._addressBook);
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// REMOVE
    public removeContact(contactId: string)
    {
        var indexToRemove = -1;
        angular.forEach(this._addressBook.contacts , function(contact: IContact, index: number)
        {
            if ( contactId === contact.id)
            {
                indexToRemove = index;
            }
        });

        this._addressBook.contacts.splice(indexToRemove, 1);

        this.storageService.save(this._addressBook);
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// CLEAR
    public clear()
    {
        this._addressBook = this._create();

        this.storageService.save(this._addressBook);
    }

    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// CREATE
    /**
     * Creates a new address book and save in storage
     * @private
     */
    _create()
    {
        return {
            contacts: []
        };
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// GETTER
    public get addressBook(): IAddressBook
    {
        return this._addressBook;
    }
}
