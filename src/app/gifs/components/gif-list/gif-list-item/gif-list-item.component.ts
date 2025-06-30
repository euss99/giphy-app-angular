import { Component, input } from "@angular/core";

import { Gif } from "@app/gifs/interfaces";

@Component({
  selector: "gif-list-item",
  imports: [],
  templateUrl: "./gif-list-item.component.html",
})
export class GifListItem {
  // @Input() gif!: Gif;
  public gif = input.required<Gif>();
}
