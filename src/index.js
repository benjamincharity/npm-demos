import angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-aria';
import 'angular-material';

import { routerConfig } from './routes';
import { ToolbarController } from './app/toolbar/toolbar.controller';

import './app/home/';
import './app/angular-ratings/';
import './app/angular-flickity/';
import './app/angular-keypad/';
import './app/angular-calendar/';
import './app/interpolation/';
import './app/imagesloaded/';
import './app/angular-keybind/';

import './index.scss';

angular.module('bc.NpmDemos', [
    // Core
    'ngAnimate',
    'ngSanitize',
    'ui.router',
    'ngMaterial',

    // Demo modules
    'demo.home',
    'demo.ratings',
    'demo.flickity',
    'demo.keypad',
    'demo.calendar',
    'demo.interpolation',
    'demo.imagesloaded',
    'demo.keybind',
])
    .config(routerConfig)
    .controller('ToolbarController', ToolbarController)
;

