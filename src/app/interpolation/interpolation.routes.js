export function InterpolationRouterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('interpolation', {
            url: '/interpolation',
            templateUrl: 'app/interpolation/interpolation.html',
            controller: 'InterpolationController as vm',
        })
    ;

}

