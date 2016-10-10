export class InterpolationController {

    constructor(
        $filter,
        bcInterpolationService
    ) {
        'ngInject';

        this.$filter = $filter;
        this.bcInterpolationService = bcInterpolationService;


        this._activate();

    }




    _activate() {
        const rawString = 'You have ${0} dollars in your ${1} account.';
        const values = ['200', 'checking'];
        this.string = this.bcInterpolationService.interpolate(rawString, values);

        const rawString2 = 'You have ${0} credits remaining as of ${1}.';
        const values2 = ['12', new Date()];
        this.filteredString = this.$filter('bcInterpolation')(rawString2, values2);


        this.string = rawString;
        this.values = values;
    }

}

