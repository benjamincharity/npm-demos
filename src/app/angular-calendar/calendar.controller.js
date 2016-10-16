/* eslint-disable max-len */
/*
 *import dayTemplate from '/src/app/angular-calendar/calendar-template.html';
 */

export class CalendarController {

    constructor(
        bcCalendarService
    ) {
        'ngInject';

        this.bcCalendarService = bcCalendarService;
        this.horizontalDayTemplate = `<time datetime="{{ day.date | date:'yyyy-MM-dd' }}" class="bc-calendar__day-time" title="{{ day.date }}" data-ng-if="day.date"><span class="week--date">{{ day.date | date:"d"}}th</span><span class="week--day">{{ day.date | date:"EEEE"}}</span></time>`;

        this.daysTemplate = `<time datetime="{{ day.date | date:'yyyy-MM-dd' }}" class="bc-calendar__day-time" title="{{ day.date }}" data-ng-if="day.date"><span class="week--date">{{ day.date | date:"d"}}</span><span class="month">{{ day.date | date:"MMMM"}}</span></time>`;
        this.daysTemplateSmall = `<time class="bc-calendar__day-time">{{ day.date | date:"MM/dd"}}</time>`;

        this.daysTemplateDay = `<time datetime="{{ day.date | date:'yyyy-MM-dd' }}" class="bc-calendar__day-time" title="{{ day.date }}" data-ng-if="day.date"><span class="week--date">{{ day.date | date:"d"}}</span><span class="month">{{ day.date | date:"MMMM"}}</span></time>`;

        this.monthsTemplate = `<time datetime="{{ day.date | date:'yyyy-MM-dd' }}" class="bc-calendar__day-time" title="{{ day.date }}" data-ng-if="day.date"><span class="week--date">{{ day.date | date:"d"}}</span></time>`;

        this._activate();

    }




    _activate() {
        const JS_DATE = {
            year: 2017,
            month: 5, // April (zero based)
            day: 5,
        };
        const JS_DATE_2 = {
            year: 2017,
            month: 5, // June
            day: 15,
        };
        this.startDate = new Date(JS_DATE.year, JS_DATE.month, JS_DATE.day).toISOString();
        this.endDate = new Date(JS_DATE_2.year, JS_DATE_2.month, JS_DATE_2.day).toISOString();

        /*
         *console.log('startDate: ', this.startDate);
         *console.log('endDate: ', this.endDate);
         */

        const PAD = 3;
        //console.log('Item: ',
            //angular.toJson(this.bcCalendarService.padDaysLeft('2016-05-18T00:00:00.027Z', PAD)));

        /*
         *this.daysInMonth = this.bcCalendarService.getDaysInMonth(date);
         */

    }


    selected(date) {
        console.log('in ctrl, got date: ', date);
    }

}

