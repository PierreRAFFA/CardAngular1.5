/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';

import { MainController } from './states/addressbook/main.controller';
import { UpdateController } from './states/contactUpdate/update.controller';

import { AddressBookService } from './services/addressBook.service';
import { StorageService } from './services/storage.service';
import { firstLetter } from './filters/firstLetter.filter';

import { letterChoice } from './components/letterChoice/letterChoice.directive';
import { LetterChoiceController } from './components/letterChoice/letterChoice.controller';

import { addressBook } from './components/addressBook/addressBook.directive';
import { AddressBookController } from './components/addressBook/addressBook.controller';

import { contact } from './components/contact/contact.directive';
import { ContactController } from './components/contact/contact.controller';

import { contactForm } from './components/contactForm/contactForm.directive';
import { ContactFormController } from './components/contactForm/contactForm.controller';

module card {
    'use strict';

    angular.module('card', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ui.router', 'ui.bootstrap'])
        .config(config)
        .config(routerConfig)
        .run(runBlock)

        .controller('MainController', MainController)
        .controller('UpdateController', UpdateController)

        .service('addressBookService', AddressBookService)
        .service('storageService', StorageService)

        .directive('letterChoice' , letterChoice)
        .controller('LetterChoiceController', LetterChoiceController)

        .directive('addressBook' , addressBook)
        .controller('AddressBookController', AddressBookController)

        .directive('contact' , contact)
        .controller('ContactController', ContactController)

        .directive('contactForm' , contactForm)
        .controller('ContactFormController', ContactFormController)

        .filter('firstLetter' , firstLetter)
    ;
}
