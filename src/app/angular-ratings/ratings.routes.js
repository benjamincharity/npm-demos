export function RatingsRouterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('angular-ratings', {
            url: '/angular-ratings',
            templateUrl: 'app/angular-ratings/ratings.html',
            controller: 'RatingsController as vm',
        })
    ;

}

