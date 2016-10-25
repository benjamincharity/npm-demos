import 'angular-keybind';
import { KeybindRouterConfig } from './keybind.routes';
import { KeybindController } from './keybind.controller';

angular.module('demo.keybind', [
    'bc.AngularKeybind',
])
    .config(KeybindRouterConfig)
    .controller('KeybindController', KeybindController)
;

