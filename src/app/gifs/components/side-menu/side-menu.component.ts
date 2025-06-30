import { Component } from "@angular/core";

import { SideMenuHeader } from "@app/gifs/components/side-menu/side-menu-header/side-menu-header.component";
import { SideMenuOptions } from "@app/gifs/components/side-menu/side-menu-options/side-menu-options.component";

@Component({
  selector: "side-menu",
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: "./side-menu.component.html",
})
export class SideMenu {}
