import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

import { environment } from "@environments/environment";
import { GifItem } from "@/app/gifs/interfaces/shared.interface";
import { GifMapper } from "@app/gifs/mapper/gif.mapper";
import { GiphyResponse } from "@app/gifs/interfaces/giphy.interfaces";

@Injectable({ providedIn: "root" })
export class GifsService {
  public trendingGifs = signal<GifItem[]>([]);
  public trendingGifsLoading = signal(false);

  private http = inject(HttpClient);

  constructor() {
    this.getTrendingGifs();
  }

  public getTrendingGifs() {
    this.trendingGifsLoading.set(true);
    this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        offset: 0
      },
    }).subscribe( response => {
      const gifs = GifMapper.toGifItems(response.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
    } );
  }
}
