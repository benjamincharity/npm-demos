export class KeypadController {

    constructor(
    ) {
        'ngInject';


        this._activate();

    }




    _activate() {
        this.numbers = '';
        this.neededLength = 10;
    }


    buttonLeft($event, numbers) {
        console.log('buttonLeft in demo', $event, numbers);
    }

    buttonRight($event, numbers) {
        console.log('buttonRight in demo', $event, numbers);
    }

    backspaceWhenEmpty() {
        console.log('backspaceWhenEmpty in demo');
    }

}

