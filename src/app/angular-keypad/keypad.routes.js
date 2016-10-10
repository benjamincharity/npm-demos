export function KeypadRouterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('angular-keypad', {
            url: '/angular-keypad',
            templateUrl: 'app/angular-keypad/keypad.html',
            controller: 'KeypadController as vm',
        })
    ;

}

