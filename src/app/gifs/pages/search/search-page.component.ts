import { Component } from '@angular/core';

import { Navbar } from '../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'search-page',
  imports: [Navbar],
  templateUrl: './search-page.component.html',
  styleUrl: './search-page.component.css',
})
export default class SearchPageComponent { }
