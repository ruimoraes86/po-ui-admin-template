import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PoModule, PoFieldModule, PoTabsModule, PoAccordionModule, PoButtonModule, PoButtonGroupModule, PoDropdownModule } from '@po-ui/ng-components';

@NgModule({
    imports: [
        CommonModule,
        PoModule,
        PoButtonModule,
        PoFieldModule,
        PoTabsModule,
        PoAccordionModule,
        PoButtonGroupModule,
        PoDropdownModule
    ],
    declarations: [],
    exports: [
        PoModule,
        PoFieldModule
    ]    
})

export class PoUiModule { }