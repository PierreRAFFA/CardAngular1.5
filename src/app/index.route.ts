/** @ngInject */
export function routerConfig($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) {
    $stateProvider
        .state('addressBook', {
            url: '/address-book',
            abstract: true,
            templateUrl: 'app/states/addressBook/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })

        .state('addressBook.list', {
            url: '/list',
            templateUrl: 'app/states/contactList/list.html',
        })
        .state('addressBook.add', {
            url: '/add',
            templateUrl: 'app/states/contactAdd/add.html',
        })
        .state('addressBook.update', {
            url: '/update/:id',
            templateUrl: 'app/states/contactUpdate/update.html',
            controller: 'UpdateController',
            controllerAs: 'update'
        });

    $urlRouterProvider.otherwise('/address-book/list');
}
