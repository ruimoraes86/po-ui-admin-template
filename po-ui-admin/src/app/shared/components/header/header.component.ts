import { Component, OnInit, ViewChild } from '@angular/core';
import { PoToolbarAction, PoModalComponent } from '@po-ui/ng-components';
import { UserData } from 'src/app/core/data/users';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  private destroy$: Subject<void> = new Subject<void>();
  
  user: any;
  number: any = 3;

  @ViewChild('settings', { static: true }) settings: PoModalComponent;

  notifications: Array<PoToolbarAction> = [
    { label: 'Order 20200826 pending approval', icon: 'po-icon-warning'},
    { label: 'Order 19980720 approved', icon: 'po-icon-ok'},
    { label: 'Order 20190725 rejected', icon: 'po-icon-clear-content'},
  ]

  profileActions: Array<PoToolbarAction> = [
    { label: 'Settings', icon: 'po-icon-settings', action: this.openSettings.bind(this) },
    { label: 'Profile', icon: 'po-icon-user' },
    { label: 'Logout', icon: 'po-icon-exit' }
  ]

  actions: Array<PoToolbarAction> = [
    { label: 'Repository', icon: 'po-icon-star-filled', url: 'https://github.com/ruimoraes86/po-ui-admin-template', }
  ]

  openSettings() {
    this.settings.open();
  }

  constructor(private userService: UserData) { 
  }

  ngOnInit() {
    this.userService.getUsers()
    .pipe(takeUntil(this.destroy$))
    .subscribe((users: any) => this.user = users.josefa);
  }
}
