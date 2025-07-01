import { Component, computed, input } from "@angular/core";

import { GifItem } from "@/app/gifs/interfaces/gif.interface";

@Component({
  selector: "gif-list",
  imports: [],
  templateUrl: "./gif-list.component.html",
})
export class GifList {
  public gifs = input.required<GifItem[]>();

  public gridGifs = computed<GifItem[][]>(() => {
    const gifs = this.gifs();
    const grid = [];

    for (let i = 0; i < gifs.length; i += 3) {
      grid.push(gifs.slice(i, i + 3));
    }

    return grid;
  });
}
