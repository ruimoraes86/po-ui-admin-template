import { Component, Inject } from '@angular/core';
import { PoSelectOption } from '@po-ui/ng-components';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-themes',
  templateUrl: './themes.component.html'
})
export class ThemesComponent {
  theme: any;

  themes : PoSelectOption[] = [
    { label: "PO UI Default", value: "default.css" },
    { label: "Custom Red Light", value: "light.css" },
    { label: "Custom Red Dark", value: "dark.css" }
  ]
  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.theme = this.themes[1].value;
    this.changeTheme(this.theme);
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0];

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = this.document.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }

  changeTheme(name: any) {
    this.loadStyle(name);
  }
}
