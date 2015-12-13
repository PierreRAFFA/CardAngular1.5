import { IContact } from '../services/addressBook.service';

export function firstLetter()
{
    var alphabet = 'a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z';

    return function(contacts: IContact[], filter: string)
    {
        var result = contacts;
        if ( filter !== '*' && filter.length === 2)
        {
            result = [];

            var letters = alphabet.substring(
                alphabet.indexOf(filter.charAt(0)),
                alphabet.indexOf(filter.charAt(1)) + 1
            );

            var rexp = new RegExp('^(' + letters + ')', 'i');

            angular.forEach(contacts, function(contact: IContact)
            {
                if ( rexp.test(contact.firstname)  || rexp.test(contact.lastname) )
                {
                    result.push(contact);
                }
            });
        }
        return result;

    };
}
