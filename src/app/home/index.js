import { HomeRouterConfig } from './home.routes';
import { HomeController } from './home.controller';

angular.module('demo.home', [])
    .config(HomeRouterConfig)
    .controller('HomeController', HomeController)
;

