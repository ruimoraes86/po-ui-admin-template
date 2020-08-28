import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {

  isSmall: boolean = false;
  isTabDisabled: boolean = false;

  changeValue(event){
    this.isSmall = !this.isSmall;
  }

  disableTab(event){
    this.isTabDisabled = !this.isTabDisabled;
  }
}
