import { Component } from '@angular/core';

import { Navbar } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'trending-page',
  imports: [Navbar],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css',
})
export default class TrendingPageComponent { }
