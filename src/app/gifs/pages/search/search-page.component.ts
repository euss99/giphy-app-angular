import { Component, signal, inject, computed } from "@angular/core";

import { GifItem } from "@/app/gifs/interfaces/gif.interface";
import { GifList } from "@app/gifs/components/gif-list/gif-list.component";
import { GifsService } from "@app/gifs/services/gifs.service";
import { Spinner } from "@app/shared/components/spinner/spinner.component";

@Component({
  selector: "search-page",
  imports: [Spinner, GifList],
  templateUrl: "./search-page.component.html",
})
export default class SearchPage {
  private gifsService = inject(GifsService);

  public gifs = signal<GifItem[]>([]);
  public gifsLoading = signal(false);
  public inputLabel = signal<string>("");

  public onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    const searchTerm = input.value.trim();

    if (!searchTerm) return;

    this.gifsLoading.set(true);
    this.gifsService.getSearchGifs(searchTerm).subscribe({
      next: gifs => {
        this.gifs.set(gifs);
        this.gifsLoading.set(false);
      },
      error: () => {
        this.gifsLoading.set(false);
      },
    });

    // Limpiar el input
    this.inputLabel.set("");
    input.value = "";
  }
}
