export function CalendarRouterConfig($stateProvider) {
    'ngInject';

    $stateProvider
        .state('angular-calendar', {
            url: '/angular-calendar',
            templateUrl: 'app/angular-calendar/calendar.html',
            controller: 'CalendarController as vm',
        })
    ;

}

