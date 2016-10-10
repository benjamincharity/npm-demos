export class ToolbarController {

    constructor(
    ) {
        'ngInject';


        this._activate();

    }




    _activate() {
        this.demos = [
            {
                name: 'angular-ratings',
                state: 'angular-ratings',
            },
            {
                name: 'angular-flickity',
                state: 'angular-flickity',
            },
            {
                name: 'angular-keypad',
                state: 'angular-keypad',
            },
            {
                name: 'angular-calendar',
                state: 'angular-calendar',
            },
            {
                name: 'angular-imagesloaded',
                state: 'imagesloaded',
            },
            {
                name: 'angular-string-interpolation',
                state: 'interpolation',
            },
        ];

    }

}

