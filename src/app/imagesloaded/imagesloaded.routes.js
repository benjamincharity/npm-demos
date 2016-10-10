export function ImagesLoadedRouterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('imagesloaded', {
            url: '/imagesloaded',
            templateUrl: 'app/imagesloaded/imagesloaded.html',
            controller: 'ImagesLoadedController as vm',
        })
    ;

}

