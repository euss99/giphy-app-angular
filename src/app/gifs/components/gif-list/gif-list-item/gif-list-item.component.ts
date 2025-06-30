import { Component, input } from "@angular/core";

import { GifItem } from "@/app/gifs/interfaces/shared.interface";

@Component({
  selector: "gif-list-item",
  imports: [],
  templateUrl: "./gif-list-item.component.html",
})
export class GifListItem {
  // @Input() gif!: Gif;
  public gif = input.required<GifItem>();
}
