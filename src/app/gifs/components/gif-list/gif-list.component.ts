import { Component, input } from "@angular/core";

import { Gif } from "@app/gifs/interfaces";
import { GifListItem } from "@app/gifs/components/gif-list/gif-list-item/gif-list-item.component";

@Component({
  selector: "gif-list",
  imports: [GifListItem],
  templateUrl: "./gif-list.component.html",
})
export class GifList {
  public gifs = input.required<Gif[]>();
}
