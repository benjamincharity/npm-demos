export function routerConfig(
    $urlRouterProvider, $locationProvider
) {
    'ngInject';

    // Default URL
    $urlRouterProvider.otherwise('/');

    // Pretty URLs
    $locationProvider.html5Mode(true);

}


