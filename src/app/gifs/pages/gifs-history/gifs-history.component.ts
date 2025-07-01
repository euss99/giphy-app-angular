import { ActivatedRoute } from "@angular/router";
import { Component, computed, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";

import { map } from "rxjs";

import { GifItem } from "@/app/gifs/interfaces/gif.interface";
import { GifsService } from "@app/gifs/services/gifs.service";
import { GifList } from "@app/gifs/components/gif-list/gif-list.component";

@Component({
  selector: "app-gifs-history",
  imports: [GifList],
  templateUrl: "./gifs-history.component.html",
})
export default class GifsHistoryPage {
  private route = inject(ActivatedRoute);
  private gifsService = inject(GifsService);

  public query = toSignal<string>(this.route.params.pipe(map(({ query }) => query)));

  public gifs = computed(() => this.gifsService.getHistoryGifs(this.query()!));
}
