import moment from 'moment';
import 'angular-json-calendar';
//import { CalendarConfig } from './calendar.config';
import { CalendarRouterConfig } from './calendar.routes';
import { CalendarController } from './calendar.controller';


angular.module('demo.calendar', [
    'bc.JsonCalendar',
])
    //.config(CalendarConfig)
    .config(CalendarRouterConfig)
    .controller('CalendarController', CalendarController)
;

