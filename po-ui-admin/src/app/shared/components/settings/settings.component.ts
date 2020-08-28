import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `<app-themes></app-themes>`
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
