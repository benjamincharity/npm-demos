import 'angular-string-interpolation';
import { InterpolationRouterConfig } from './interpolation.routes';
import { InterpolationController } from './interpolation.controller';

angular.module('demo.interpolation', ['bc.AngularStringInterpolation'])
    .config(InterpolationRouterConfig)
    .controller('InterpolationController', InterpolationController)
;

