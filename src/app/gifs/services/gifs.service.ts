import { HttpClient } from "@angular/common/http";
import { computed, inject, Injectable, signal } from "@angular/core";

import { Observable, map, tap } from "rxjs";

import { environment } from "@environments/environment";
import { GifItem } from "@/app/gifs/interfaces/shared.interface";
import { GifMapper } from "@app/gifs/mapper/gif.mapper";
import { GiphyResponse } from "@app/gifs/interfaces/giphy.interfaces";

type SearchHistory = Record<string, GifItem[]>;

@Injectable({ providedIn: "root" })
export class GifsService {
  private http = inject(HttpClient);

  public searchHistory = signal<SearchHistory>({});
  public searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  public getTrendingGifs(): Observable<GifItem[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          offset: 0,
        },
      })
      .pipe(map(({ data }) => GifMapper.toGifItems(data)));
  }

  public getSearchGifs(query: string): Observable<GifItem[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => GifMapper.toGifItems(data)),
        tap(gifs => {
          this.searchHistory.update(history => ({
            ...history,
            [query]: gifs,
          }));
        })
      );
  }

  public getHistoryGifs(query: string): GifItem[] {
    return this.searchHistory()[query] || [];
  }
}
