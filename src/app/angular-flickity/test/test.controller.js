export class TestController {

    constructor(
    ) {
        'ngInject';


        this._activate();

    }




    _activate() {
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
            resize: false,
            setGallerySize: false,
            prevNextButtons: true,
            friction: .4,
            selectedAttraction: .1,
            groupCells: true,
            lazyLoad: true,
        };
    }

}

