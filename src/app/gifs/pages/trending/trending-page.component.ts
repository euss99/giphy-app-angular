import { Component, signal, inject, computed } from "@angular/core";

import { GifItem } from "@/app/gifs/interfaces/shared.interface";
import { GifList } from "@app/gifs/components/gif-list/gif-list.component";
import { GifsService } from "@app/gifs/services/gifs.service";

import { Spinner } from "@app/shared/components/spinner/spinner.component";

@Component({
  selector: "trending-page",
  imports: [GifList, Spinner],
  templateUrl: "./trending-page.component.html",
})
export default class TrendingPage {
  private gifsService = inject(GifsService);

  public gifs = computed(() => this.gifsService.trendingGifs());
  public gifsLoading = computed(() => this.gifsService.trendingGifsLoading());
}
