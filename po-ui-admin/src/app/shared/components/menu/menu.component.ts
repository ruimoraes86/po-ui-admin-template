import { Component } from '@angular/core';
import { MENU_ITEMS } from 'src/app/pages/pages-menu';

@Component({
  selector: 'app-menu',
  template: `<po-menu p-filter="true" [p-menus]="menus"></po-menu>`
})
export class MenuComponent {
  menus = MENU_ITEMS;
}
