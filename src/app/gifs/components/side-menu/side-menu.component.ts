import { Component } from '@angular/core';

import { SideMenuHeader } from '../side-menu-header/side-menu-header.component';
import { SideMenuOptions } from '../side-menu-options/side-menu-options.component';

@Component({
  selector: 'side-menu',
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: './side-menu.component.html',
})
export class SideMenu { }
