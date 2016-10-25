export function KeybindRouterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('keybind', {
            url: '/keybind',
            templateUrl: 'app/angular-keybind/keybind.html',
            controller: 'KeybindController as vm',
        })
    ;

}

