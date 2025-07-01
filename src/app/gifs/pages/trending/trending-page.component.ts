import { Component, signal, inject, viewChild, ElementRef, effect } from "@angular/core";

import { GifItem } from "@/app/gifs/interfaces/gif.interface";
import { GifList } from "@app/gifs/components/gif-list/gif-list.component";

import { GifsService } from "@app/gifs/services/gifs.service";
import { ScrollStateService } from "@app/shared/services/scroll-state.service";

const TENDING_GIFS_LIMIT = 20;

@Component({
  selector: "trending-page",
  imports: [GifList],
  templateUrl: "./trending-page.component.html",
})
export default class TrendingPage {
  private gifsService = inject(GifsService);
  private scrollStateService = inject(ScrollStateService);

  public gifs = signal<GifItem[]>([]);
  public gifsLoading = signal(false);
  public gifsOffset = signal(0);
  public gifListRef = viewChild<ElementRef>("gifList");

  constructor() {
    this.getTrendingGifs();

    effect(() => {
      const gifList = this.gifListRef()?.nativeElement;

      if (gifList) {
        gifList.scrollTop = this.scrollStateService.scrollTop();
      }
    });
  }

  public onScroll(event: Event): void {
    const target = event.target as HTMLElement;

    this.scrollStateService.setScrollState(
      target.scrollTop,
      target.scrollHeight,
      target.clientHeight
    );

    const isAtBottom =
      this.scrollStateService.scrollTop() >=
      this.scrollStateService.scrollHeight() - this.scrollStateService.clientHeight();

    if (isAtBottom) this.getTrendingGifs();
  }

  public getTrendingGifs() {
    if (this.gifsLoading()) return;

    this.gifsLoading.set(true);
    this.gifsService.getTrendingGifs(this.gifsOffset()).subscribe({
      next: gifs => {
        this.gifs.update(currentGifs => [...currentGifs, ...gifs]);
        this.gifsLoading.set(false);
        this.gifsOffset.set(this.gifsOffset() + TENDING_GIFS_LIMIT);
      },
      error: () => {
        this.gifsLoading.set(false);
      },
    });
  }
}
