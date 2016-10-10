import 'angular-imagesloaded';
import { ImagesLoadedRouterConfig } from './imagesloaded.routes';
import { ImagesLoadedController } from './imagesloaded.controller';

angular.module('demo.imagesloaded', [
    'bc.imagesloaded',
])
    .config(ImagesLoadedRouterConfig)
    .controller('ImagesLoadedController', ImagesLoadedController)
;

