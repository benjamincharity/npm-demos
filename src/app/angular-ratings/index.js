//import 'angular-ratings';
import { RatingsRouterConfig } from './ratings.routes';
import { RatingsController } from './ratings.controller';


angular.module('demo.ratings', [
    //'bc.AngularRatings',
])
    .config(RatingsRouterConfig)
    .controller('RatingsController', RatingsController)
;

