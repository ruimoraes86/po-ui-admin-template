import { Component, ViewChild } from '@angular/core';
import { PoAccordionItemComponent, PoButtonGroupItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @ViewChild('item1', { static: true }) item1: PoAccordionItemComponent;
  @ViewChild('item2', { static: true }) item2: PoAccordionItemComponent;
  @ViewChild('item3', { static: true }) item3: PoAccordionItemComponent;

  buttons: Array<PoButtonGroupItem> = [
    { label: "Toogle First Item", action: this.onClick.bind(this, 1) },
    { label: "Toogle Second Item", action: this.onClick.bind(this, 2) },
    { label: "Toogle Third Item", action: this.onClick.bind(this, 3) },
  ]

  onClick(item: any) {
    switch (item) {
      case 1:
        this.setExpandedItem(this.item1);
        break;
      case 2:
        this.setExpandedItem(this.item2);
        break;
      default:
        this.setExpandedItem(this.item3);
        break;
    }
  }

  setExpandedItem(item: PoAccordionItemComponent) {
    if (item.expanded){
      item.collapse();
    }
    else {
      item.expand();
    }
  }
}
