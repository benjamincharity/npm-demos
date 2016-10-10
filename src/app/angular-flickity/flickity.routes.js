export function FlickityRouterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('angular-flickity', {
            url: '/angular-flickity',
            templateUrl: 'app/angular-flickity/flickity.html',
            controller: 'FlickityController as vm',
        })
            .state('angular-flickity.test', {
                url: '/test',
                templateUrl: 'app/angular-flickity/test/test.html',
                controller: 'FlickityController as vm',
            })
    ;

}

