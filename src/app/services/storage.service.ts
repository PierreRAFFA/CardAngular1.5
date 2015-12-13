import { IAddressBook } from '../services/addressBook.service';

export class StorageService
{
    static ADDRESS_BOOK_KEY = 'tn-addressbook';
    
    /**
     * Browser SessionStorage
     */
    private _storage: Storage;

    ////////////////////////////////////////////////////////
    //////////////////////////////////////////// CONSTRUCTOR
    /** @ngInject */
    constructor (
        private $window: Window)
    {
        this._storage = $window.localStorage;
    }

    public get(): IAddressBook
    {
        return this._deserialize(this._storage.getItem(
            StorageService.ADDRESS_BOOK_KEY)
        );
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// SAVE IN LOCALSTORAGE
    public save(data: IAddressBook) {
        this._storage.setItem(
            StorageService.ADDRESS_BOOK_KEY ,
            this._serialize(data)
        );
    }
    ////////////////////////////////////////////////////////
    /////////////////////////////////////////////// DATE SERIALIZATION
    private _serialize(data: IAddressBook): string
    {
        return JSON.stringify(data);
    }

    private _deserialize(data: string): IAddressBook
    {
        return JSON.parse(data);
    }
}
