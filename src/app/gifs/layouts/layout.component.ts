import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Navbar } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar],
  templateUrl: './layout.component.html',
})
export default class Layout { }
