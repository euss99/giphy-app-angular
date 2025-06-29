import { Component } from '@angular/core';

import { Navbar } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'dashboard-page',
  imports: [Navbar],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css',
})
export default class DashboardPage { }
