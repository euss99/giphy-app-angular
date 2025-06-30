import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { SideMenu } from "@app/gifs/components/side-menu/side-menu.component";

@Component({
  selector: "dashboard-page",
  imports: [RouterOutlet, SideMenu],
  templateUrl: "./dashboard-page.component.html"
})
export default class DashboardPage {}
