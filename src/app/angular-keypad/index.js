import { angularRipple } from '../../../node_modules/ngRipple/angular-ripple.js';
import 'angular-keypad';
import { config } from './keypad.config';
import { keypadRunBlock } from './keypad.run';
import { KeypadRouterConfig } from './keypad.routes';
import { KeypadController } from './keypad.controller';


angular.module('demo.keypad', [
    'angularRipple',
    'bc.AngularKeypad',
])
    .config(KeypadRouterConfig)
    .config(config)
    .run(keypadRunBlock)
    .controller('KeypadController', KeypadController)
;

