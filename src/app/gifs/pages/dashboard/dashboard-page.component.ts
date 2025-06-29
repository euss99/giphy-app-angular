import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SideMenu } from '../../components/side-menu/side-menu.component';

@Component({
  selector: 'dashboard-page',
  imports: [RouterOutlet, SideMenu],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export default class DashboardPage { }
