import { Component, computed, inject } from "@angular/core";

import { GifsService } from "@app/gifs/services/gifs.service";
import { MenuOption } from "@/app/gifs/interfaces/gif.interface";
import { SideMenuHeader } from "@app/gifs/components/side-menu/side-menu-header/side-menu-header.component";
import { SideMenuOptions } from "@app/gifs/components/side-menu/side-menu-options/side-menu-options.component";

const menuOptions: MenuOption[] = [
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

@Component({
  selector: "side-menu",
  imports: [SideMenuHeader, SideMenuOptions],
  templateUrl: "./side-menu.component.html",
})
export class SideMenu {
  private gifsService = inject(GifsService);

  public menuOptions = menuOptions;
  public searchHistoryKeys = computed(() => this.gifsService.searchHistoryKeys());
}
