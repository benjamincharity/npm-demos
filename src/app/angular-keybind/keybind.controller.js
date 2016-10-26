export class KeybindController {

    constructor(
    ) {
        'ngInject';


        this._activate();

    }




    _activate() {

    }


    method(event) {
        console.log('method called! ', event);
    }

    method2(event, test) {
        console.log('method2 called! ', event);
    }

}

