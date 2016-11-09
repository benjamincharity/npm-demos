export class FlickityController {
    constructor(
        $document, $timeout, $rootScope, $scope,
        FlickityService
    ) {
        'ngInject';

        this.$document = $document;
        this.$timeout = $timeout;
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.FlickityService = FlickityService;

        this._activate();

    }




    _activate() {
        this.slides = [
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide1.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide2.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide3.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide4.jpg',
        ];

        this.slides2 = [
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide1.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide2.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide3.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide4.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide5.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide6.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide7.jpg',
            'http://cdn.benjamincharity.com/codepen/angular-flickity/slide8.jpg',
        ];

        this.flickityOptions = {
            cellSelector: '.flickity__slide',
            resize: true,
            setGallerySize: false,
            prevNextButtons: true,
            groupCells: true,
            lazyLoad: true,
            wrapAround: false,
        };
        this.flickityEvents = [
            'staticClick',
            'cellSelect',
        ];

        this.initializeFlickity();


        // Expose the logs to the dom
        this.logs = [];

        //
        // Listen for all broadcasts and push the event to our array
        const settle = this.$rootScope.$on('Flickity:demoId:settle', (event, data) => {
            console.log('settle: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const cellSelect = this.$rootScope.$on('Flickity:demoId:cellSelect', (event, data) => {
            console.log('cellSelect: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const dragStart = this.$rootScope.$on('Flickity:demoId:dragStart', (event, data) => {
            console.log('dragStart: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const dragMove = this.$rootScope.$on('Flickity:demoId:dragMove', (event, data) => {
            console.log('dragMove: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const dragEnd = this.$rootScope.$on('Flickity:demoId:dragEnd', (event, data) => {
            console.log('dragEnd: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const pointerDown = this.$rootScope.$on('Flickity:demoId:pointerDown', (event, data) => {
            console.log('pointerDown: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const pointerMove = this.$rootScope.$on('Flickity:demoId:pointerMove', (event, data) => {
            console.log('pointerMove: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const pointerUp = this.$rootScope.$on('Flickity:demoId:pointerUp', (event, data) => {
            console.log('pointerUp: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const staticClick = this.$rootScope.$on('Flickity:demoId:staticClick', (event, data) => {
            console.log('staticClick: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });

        const lazyLoad = this.$rootScope.$on('Flickity:demoId:lazyLoad', (event, data) => {
            console.log('lazyLoad: ', event, data);

            this.$scope.$apply(() => {
                const obj = {
                    id: Math.floor(Date.now() * Math.random()),
                    name: event.name,
                };
                this.logs.push(obj);
            });
        });
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

        /*
         *const dragStart = this.$rootScope.$on('Flickity:bar:dragStart', (event, pointer) => {
         *    console.log('Just got a dragStart:', event, pointer);
         *});
         */



/*
 *        this.$timeout(() => {
 *            angular.element(this.$document[0]).ready(() => {
 *                // Get the element that should hold the slider
 *                const element = angular.element(this.$document[0].getElementById('foobar'));
 *
 *                // Initialize our Flickity instance
 *                this.FlickityService.create(element[0], null, this.flickityOptions);
 *            });
 *        });
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

    triggerEvent() {
        const event = new CustomEvent('settle', { bubbles: true, cancelable: true });
        console.log('event: ', event);
        this.dispatchEvent(event);

/*
 *        this.FlickityService.get('htmlDirID')
 *            .then((instance) => {
 *                console.log('FlickityService.get: ', instance.instance._events.settle[0]);
 *
 *                const event = document.createEvent('Event');
 *                event.initEvent('settle', true, true);
 *                document.getElementById('htmlDirID').dispatchEvent(event);
 *            })
 *            .catch((error) => {
 *                console.error('Error in FlickityService.get: ', error);
 *            })
 *        ;
 */

    }

}

