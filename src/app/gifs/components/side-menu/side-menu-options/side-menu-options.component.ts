import { Component, input } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { MenuOption } from "@/app/gifs/interfaces/gif.interface";

@Component({
  selector: "side-menu-options",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./side-menu-options.component.html",
})
export class SideMenuOptions {
  public menuOptions = input.required<MenuOption[]>();
  public searchHistoryKeys = input.required<string[]>();
}
