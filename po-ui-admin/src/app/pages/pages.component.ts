import { Component } from '@angular/core';

import { MENU_ITEMS } from './pages-menu';

@Component({
    selector: 'po-ui-pages',
    templateUrl: './pages.component.html'
  })
  export class PagesComponent {  
    menus = MENU_ITEMS;
  }