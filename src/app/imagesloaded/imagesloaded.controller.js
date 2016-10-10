export class ImagesLoadedController {

    constructor(
    ) {
        'ngInject';


        this._activate();

    }




    _activate() {

        /*
         *const tests = document.querySelectorAll('.imagesloaded__test');
         *console.log('tests: ', tests.length);
         */

    }



    selectorAlways(instance) {
        console.info('in DEMO selectorAlways: ', instance);
    }

    selectorProgress(instance, image) {
        console.info('in DEMO selectorProgress: ', instance, image);
    }

    singleAlways(instance) {
        //console.log('DEMO singleAlways: ', instance);
    }

    backgroundAlways(instance) {
        console.log('DEMO backgroundAlways: ', instance);
    }

    failureAlways(instance) {
        //console.log('DEMO failureAlways: ', instance);
    }

    done(instance) {
        console.log('in DEMO done: ', instance);
    }

    fail(instance) {
        //console.log('in DEMO fail: ', instance);
    }

    progress(instance, image) {
        //console.log('in DEMO progress: ', instance, image);
    }

}

