import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html'
})
export class DatepickerComponent {
  start: any;
  startMinDate: any | Date = "21/08/2020";  
  end: any;
  endMaxDate: any | Date = "25/08/2020";
}