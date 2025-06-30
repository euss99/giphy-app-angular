import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

import { MenuOption } from "@app/gifs/interfaces";

@Component({
  selector: "side-menu-options",
  imports: [RouterLink, RouterLinkActive],
  templateUrl: "./side-menu-options.component.html",
})
export class SideMenuOptions {
  public menuOptions: MenuOption[] = [
    {
      icon: "fa-solid fa-chart-line",
      label: "Trending",
      subLabel: "Trending GIFs",
      route: "/dashboard/trending",
    },
    {
      icon: "fa-solid fa-search",
      label: "Search",
      subLabel: "Search GIFs",
      route: "/dashboard/search",
    },
  ];
}
