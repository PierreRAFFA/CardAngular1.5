import { AddressBookService } from './addressBook.service';

describe('AddressBookService', () => {
    let service: AddressBookService;

    beforeEach(angular.mock.module('card'));

    beforeEach(inject((addressBookService: AddressBookService) => {
        service = addressBookService;
        addressBookService.clear();
    }));

    it('should be registered', inject((addressBookService: AddressBookService) => {
        expect(addressBookService).not.toBeNull();
    }));

    describe('when starting' , function()
    {
        it('should create an empty address book' , function()
        {
            expect(service.addressBook).not.toBeNull();
            expect(service.addressBook.contacts.length).toEqual(0);
        });
    });

    describe('when adding one new contact' , function()
    {
        it('should add one contact to the address book' , function()
        {
            var numContacts: number = service.addContact({
                id: 'c1',
                firstname: 'Pierre',
                lastname: 'RAFFA',
                country: 'France',
                postalCode: '34000',
                address: 'rue des camélias',
                town: 'Montpellier',
                county: 'Hérault'
            });
            expect(numContacts).toEqual(1);
        });
    });

    describe('when adding 2 contacts, then clearing' , function()
    {
        it('should clear the address book' , function()
        {
            service.addContact({
                id: 'c1',
                firstname: 'Pierre',
                lastname: 'RAFFA',
                country: 'France',
                postalCode: '34000',
                address: 'rue des camélias',
                town: 'Montpellier',
                county: 'Hérault'
            });
            service.addContact({
                id: 'c2',
                firstname: 'Pierre',
                lastname: 'RAFFA',
                country: 'France',
                postalCode: '34000',
                address: 'rue des camélias',
                town: 'Montpellier',
                county: 'Hérault'
            });

            expect(service.addressBook.contacts.length).toEqual(2);

            service.clear();

            expect(service.addressBook.contacts.length).toEqual(0);
        });
    });

});

