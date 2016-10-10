import 'angular-flickity';
import { FlickityRouterConfig } from './flickity.routes';
import { FlickityController } from './flickity.controller';


angular.module('demo.flickity', [
    'bc.Flickity',
])
    .config(FlickityRouterConfig)
    .controller('FlickityController', FlickityController)
;

