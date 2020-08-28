import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoUiModule } from '../core/po-ui.module';

import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ThemesComponent } from './components/themes/themes.component';
import { SettingsComponent } from './components/settings/settings.component';
import { FormsModule } from '@angular/forms';

const components = [
  HeaderComponent, 
  MenuComponent
]

@NgModule({
  imports: [
    CommonModule,
    PoUiModule,
    FormsModule
  ],
  exports: [ components ],
  declarations: [ components, ThemesComponent, SettingsComponent ],
})
export class SharedModule { }
