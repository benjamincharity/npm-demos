export class FlickityController {
    constructor(
        $document, $timeout, $rootScope,
        FlickityService
    ) {
        'ngInject';

        this.$document = $document;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        this.FlickityService = FlickityService;

        this._activate();

    }




    _activate() {
        this.slides = [
            'assets/images/one.jpg',
            'assets/images/three.jpg',
            'assets/images/four.jpg',
        ];

        this.slides2 = [
            'assets/images/one.jpg',
            'assets/images/two.jpg',
            'assets/images/three.jpg',
            'assets/images/four.jpg',
            'assets/images/five.jpg',
            'assets/images/six.jpg',
            'assets/images/seven.jpg',
            'assets/images/eight.jpg',
        ];

        this.flickityOptions = {
            cellSelector: '.flickity__slide',
            resize: true,
            setGallerySize: false,
            prevNextButtons: true,
            friction: .4,
            selectedAttraction: .1,
            groupCells: true,
            lazyLoad: true,
        };
        this.flickityEvents = [
            'staticClick',
            'cellSelect',
        ];

        this.initializeFlickity();
    }


    initializeFlickity() {

        /*
         *const settle = this.$rootScope.$on('Flickity:bar:scroll', (event, data) => {
         *    console.info('Just scrolled event:', event);
         *    console.info('Just scrolled progress:', data.progress);
         *    console.info('Just scrolled positionX:', data.positionX);
         *    console.log('------------------------------------');
         *});
         */

        const dragStart = this.$rootScope.$on('Flickity:bar:dragStart', (event, pointer) => {
            console.log('Just got a dragStart:', event, pointer);
        });



/*
 *        this.$timeout(() => {
 *            angular.element(this.$document[0]).ready(() => {
 *                // Get the element that should hold the slider
 *                const element = angular.element(this.$document[0].getElementById('bar'));
 *
 *                // Initialize our Flickity instance
 *                this.FlickityService.create(element[0], element[0].id);
 *            });
 *        }, 2000);
 */

/*
 *        const el = this.$document[0].getElementById('js_test');
 *        const $el = angular.element(el);
 *
 *        console.log('in initializeFlickity: ', $el);
 *        this.FlickityService.create($el[0], 'testId').then((result) => {
 *            console.log('created: ', result);
 *        });
 */

    }

    selectCell(cell) {
        this.FlickityService.selectCell('bar', cell)
    }

}

